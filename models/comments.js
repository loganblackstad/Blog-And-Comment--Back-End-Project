"use strict";
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      post_id: DataTypes.STRING,
      title: DataTypes.STRING,
      author: DataTypes.STRING,
    },
    {}
  );
  Posts.associate = function (models) {
    // associations can be defined here
  };
  return Posts;
};
