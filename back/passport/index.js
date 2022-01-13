const passport = require('passport');
const { User } = require('../models');
const local = require('./local')

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({where: { id }});
      done(null, user);  // id를 통해 user 정보 전체 다 가져온다.  && req.user 넣어줌
    } catch (error) {
      console.error(error);
      done(error);
    }
  })

  local();
}