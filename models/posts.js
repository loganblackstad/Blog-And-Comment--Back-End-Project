"use strict";
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      body_content: DataTypes.STRING,
      date_posted: DataTypes.DATE,
    },
    {}
  );
  Posts.associate = function (models) {
    Posts.belongsTo(models.Users, { foreignKey: "id" });
    Posts.hasMany(models.Comments, { foreignKey: "post_id" });
  };
  return Posts;
};
