"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        isEmail: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_login: {
        type: Sequelize.DATE,
      },
      newsletter: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
