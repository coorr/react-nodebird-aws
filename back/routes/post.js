const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const router = express.Router();
const { Post, Comment, Image, User, Hashtag } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log("upload 폴더가 없으므로 생성합니다.");
  fs.mkdirSync('uploads');
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'coorsm-s3',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 },  // 20MB 제한
})

router.post('/',isLoggedIn, upload.none(), async (req,res,next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    })
    if(hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({ // 같은 중복의 해시태그가 있으면 한개만 할수있게(ex. #노드 #노드)
        where: {name:tag.slice(1).toLowerCase()}
     })));  // [[노드,true] ,[리액트, true]]
     await post.addHashtags(result.map((v) => v[0]));
    }
    if(req.body.image) {
      if(Array.isArray(req.body.image)) {  // [test.png , hi.png]
       const images = await Promise.all(req.body.image.map((image) => Image.create({src: image})));
       await post.addImages(images);
      } else {   // test.png
       const images = await Image.create({src : req.body.image});
       await post.addImages(images);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,   // 댓글 작성자
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User,  // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User,  // 좋아요 작성자
        as: 'Likers',
        attributes: ['id'],
      }] 
    })
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.post('/images', isLoggedIn, upload.array('image'), (req,res,next) => {  // post / post/imgeas
  console.log(req.files);
  res.json(req.files.map((v) => v.location));
})

router.post('/:postId/retweet',isLoggedIn, async (req,res,next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId },
      include: [{
        model: Post,
        as: 'Retweet'
      }]
    })
    if(!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.')
    }
    if(req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send('자신의 글을 리트윗할 수 없습니다.');
    }
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: { 
        UserId : req.user.id,
        RetweetId: retweetTargetId,
      }
    });
    if(exPost) {
      return res.status(200).send("이미 리트윗 했습니다.");
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet',
    })
    const retweetWithPrevPost = await Post.findOne({
      where: { id : retweet.id },
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id' , 'nickname']
        }, {
        model: Image,
       }]
      }, {
        model: User,
        attributes: ['id' ,'nickname']
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id' ,'nickname']
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model:User,
          attributes: ['id' ,'nickname']
        }]
      }]
    })
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/:postId', async (req,res,next) => {  //get /post/1
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId },
    })
    if(!post) {
      return res.status(404).send('존재하지 않는 게시글입니다.')
    }
    const fullPost = await Post.findOne({
      where: { id : post.id },
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id' , 'nickname']
        }, {
        model: Image,
       }]
      }, {
        model: User,
        attributes: ['id' ,'nickname'],
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id' ,'nickname']
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model:User,
          attributes: ['id' ,'nickname']
        }]
      }]
    })
    res.status(200).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.post('/:postId/comment',isLoggedIn, async (req,res,next) => {
  try {
    const postCheck = await Post.findOne({
      where: {id: req.params.postId}
    })
    if(!postCheck) {
      return res.status(403).send('존재하지 않는 게시글입니다.')
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: {id : comment.id},
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, ]
    })
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.patch('/:postId/like',isLoggedIn, async (req,res,next) => {
  try {
    const post = await Post.findOne({where: {id : req.params.postId }})
    if(!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.addLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.delete('/:postId/like',isLoggedIn, async (req,res,next) => {
  try {
    const post = await Post.findOne({where: {id : req.params.postId }})
    if(!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.removeLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.delete('/:postId', isLoggedIn, async (req,res,next) => {
  try {
    await Post.destroy({
      where: { 
        id: req.params.postId,
        UserId: req.user.id,
       },
    });
    res.json({ PostId : parseInt(req.params.postId,10)})
  } catch (error) {
    console.error(error);
    next(error);
  }
})


router.delete('/post', (req,res) => {
  res.json({id: 1 })
})


module.exports = router;