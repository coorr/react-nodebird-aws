const express = require('express');
const { User } = require('../models')
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req,res,next) => {
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

module.exports = router;

