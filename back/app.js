const express = require('express');
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const postsRouter = require('./routes/posts')
const hashtag = require('./routes/hashtag');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const app = express();  // 서버
const db = require('./models');
const passportConfig = require('./passport');


dotenv.config();

passportConfig();
db.sequelize.sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(err => console.log(err))


if(process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
  app.use(cors({
    origin: ['http://localhost:4000', 'http://coorsm.cf', 'http://13.124.34.97' ],
    credentials: true, // 프론트의 cookie가 백엔드로 보낼 수 있게 허용
  }));

} else {
  app.use(morgan('dev'));
  app.use(cors({
    origin: true,
    credentials: true, // 프론트의 cookie가 백엔드로 보낼 수 있게 허용
  }));
}

app.use('/',express.static(path.join(__dirname, 'uploads')));

app.use(express.json());   // req.body 쓸 수 있게 해주는 부분
app.use(express.urlencoded({extended:true}));  // form 으로 넘겼을 떄 req.body 받을 수 있게 
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    domain: process.env.NODE_ENV === 'production' 
  }
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req,res) => {
  res.send('hello expressss');
})

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/hashtag', hashtag);

app.use((err,req,res,next) => {
  
})

app.listen(80, () => {
  console.log("서버 실행 중!");
})


