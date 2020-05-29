"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      last_login: DataTypes.DATE,
    },
    {}
  );
  Users.associate = function (models) {
    Users.hasMany(models.Posts, { foreignKey: "author" });
    Users.hasMany(models.Comments, { foreignKey: "author" });
  };
  return Users;
};
