"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      last_login: DataTypes.DATE,
      newsletter: DataTypes.BOOLEAN,
    },
    {}
  );
  Users.associate = function (models) {
    Users.hasMany(models.Posts, { foreignKey: "user_id" });
    Users.hasMany(models.Comments, { foreignKey: "user_id" });
  };
  return Users;
};
