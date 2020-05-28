'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    date_posted: DataTypes.DATE
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
  };
  return Posts;
};