module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {  
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    chartset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });
  Post.associate= (db) => {
    db.Post.belongsTo(db.User);  // post.addUser, post.getUser, post.removeUser ccccccccexxx
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag'});  // post.AddHashtags
    db.Post.hasMany(db.Comment);  // post.AddComment, post.getComment, post.removeComment
    db.Post.hasMany(db.Image);  // post.addImages, post.getImages
    db.Post.belongsTo(db.Post , { as: 'Retweet'});  // post.addRetweet
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // post.addLikers, post.removeLikers
  };
  return Post; 
}