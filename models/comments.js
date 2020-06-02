"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      author: DataTypes.STRING,
      remark: DataTypes.STRING,
    },
    {}
  );
  Comments.associate = function (models) {
    Comments.belongsTo(models.Posts, { foreignKey: "post_id" });
  };
  return Comments;
};
