"use strict";
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      post_body: DataTypes.STRING,
      date_posted: DataTypes.STRING,
    },
    {}
  );
  Posts.associate = function (models) {
    Post.hasMany(models.User, { foreignKey: "post_id" });
  };
  return Posts;
};
