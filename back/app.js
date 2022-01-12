const express = require('express');
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

const app = express();  // 서버
const db = require('./models');

db.sequelize.sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(err => console.log(err))

// req.body 쓸 수 있게 해주는 부분
app.use(express.json());   
// form 으로 넘겼을 떄 req.body 받을 수 있게 
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
  res.send('hello express');
})

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(4001, () => {
  console.log("서버 실행 중!");
})


