"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  Users.associate = function (models) {
    User.hasMany(models.Post, { foreignKey: "user_id" });
  };
  return Users;
};
