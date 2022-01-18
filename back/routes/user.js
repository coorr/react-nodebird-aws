const express = require('express');
const { User, Post } = require('../models')
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

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

router.get('/followers', isLoggedIn, async(req,res,next) => {   // get/user/followers
  try {
    const user = await User.findOne({ where: { id: req.user.id }});
    if(!user) {
      return res.status(403).send("없는 사람을 팔로우를 할 수 없습니다.");
    }
    const followers = await user.getFollowers();
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
    const followings = await user.getFollowings();
    res.status(200).json(followings);
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


module.exports = router;
