const express = require('express');
const { Post, Comment, Image, User, Hashtag } = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const { Op } = require('sequelize');

const router = express.Router();

router.post('/login',isNotLoggedIn, (req,res,next) => {
  passport.authenticate('local', (err,user,info) => {
    if(err) { // 서버 에러
      console.error(err);
      next(err);
    }
    if(info) { // 클라이언트 에러
      return res.status(401).send(info.reason);
    }

    return req.login(user, async(loginErr) => {
      if(loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
     try {
      const fullUserWithoutPassword =  await User.findOne({
        where: { id : user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      return res.json(fullUserWithoutPassword);
     } catch (error) {
       
     }
      
    })
  })(req,res,next);
});

router.get('/', async (req,res,next) => {
  try {
    if(req.user) {
      const fullUserWithoutPassword =  await User.findOne({
        where: { id : req.user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/followers', isLoggedIn, async(req,res,next) => {   // get/user/followers
  try {
    const user = await User.findOne({ where: { id: req.user.id }});
    if(!user) {
      return res.status(403).send("없는 사람을 팔로우를 할 수 없습니다.");
    }
    const followers = await user.getFollowers({
      limit: req.query.limit,
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/followings', isLoggedIn, async(req,res,next) => {   // get/user/followings
  try {
    const user = await User.findOne({ where: { id: req.user.id }});
    if(!user) {
      return res.status(403).send("없는 사람을 팔로우를 할 수 없습니다.");
    }
    const followings = await user.getFollowings({
      limit: req.query.limit,
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/:userId', async (req,res,next) => {
  try {
    const fullUserWithoutPassword =  await User.findOne({
      where: { id : req.params.userId },
      attributes: {
        exclude: ['password']
      },
      include: [{
        model: Post,
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followings',
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followers',
        attributes: ['id'],
      }]
    })
      
    if(fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON();
      data.Posts = data.Posts.length;  // 개인정보 침해 예방
      data.Followers = data.Followers.length;
      data.Followings = data.Followings.length;
      res.status(200).json(data);
    } else {
      res.status(404).json("존재하지 않는 사용자입니다.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.post('/', isNotLoggedIn ,  async (req,res,next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    })
    if(exUser) {
     return res.status(403).send('이미 사용 중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10~13 숫자가 높을수록 보완성이 좋다
    console.log(req);  
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    })
    res.send('ok');
  } catch (error) {
    console.log(error);
    next(error);
  }
})

router.post('/logout', isLoggedIn , (req,res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
}) 

router.patch('/nickname', isLoggedIn, async(req,res,next) => {
  try {
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ nickname: req.body.nickname })
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.patch('/:userId/follow', isLoggedIn, async(req,res,next) => {   // PATCH /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }});
    if(!user) {
      return res.status(403).send("없는 사람을 팔로우를 할 수 없습니다.");
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId,10) })
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.delete('/:userId/follow', isLoggedIn, async(req,res,next) => {   // delete /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }});
    if(!user) {
      return res.status(403).send("없는 사람을 팔로우를 할 수 없습니다.");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
  } catch (error) {
    console.error(error);
    next(error);
  }
})



router.delete('/follower/:userId', isLoggedIn, async(req,res,next) => {   // delete /user/follower/2
  try {
    const user = await User.findOne({ where: { id: req.params.userId }});
    if(!user) {
      return res.status(403).send("없는 사람을 차단하려고 할 수 없습니다.");
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/:userId/posts', async (req, res, next) => {  // GET /user/1/posts
  try {
    const where = { UserId : req.params.userId };
    if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        [ 'createdAt', 'DESC'],
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
          order:[['createdAt', 'DESC']]
        }],
      },  {
        model: User,  // 게시글 작성자
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id' , 'nickname']
        }, {
        model: Image,
       }]
      }]
    })
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
})


module.exports = router;

