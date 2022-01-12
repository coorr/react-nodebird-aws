module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {  // Mysql에서는 user 테이블 생성
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    chartset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });
  User.associate= (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like',  as: 'Liked' });  // through: 테이블이름변경 , foreignKey: 컬럼의이름변경
    db.User.belongsToMany(db.User, { through:'Follow', as: 'Followers', foreignKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through:'Follow', as: 'Followings', foreignKey: 'FollowerId' });
  };
  return User;
}