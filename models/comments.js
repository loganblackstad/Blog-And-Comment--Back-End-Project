'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    author: DataTypes.STRING,
    date_posted: DataTypes.DATE,
    post_id: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};