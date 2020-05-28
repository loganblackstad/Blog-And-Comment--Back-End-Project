"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      remark: DataTypes.STRING,
      post_id: DataTypes.STRING,
    },
    {}
  );
  Comments.associate = function (models) {
    // associations can be defined here
  };
  return Comments;
};
