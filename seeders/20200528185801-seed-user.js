"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "john_doe_3",
          email: "therealjohndoe@gmail.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_login: new Date(),
        },
        {
          username: "jane_doe_5",
          email: "therealjanedoe@gmail.com",
          password: "12345678",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_login: new Date(),
        },
        {
          username: "logan-yeah",
          email: "logan@gmail.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_login: new Date(),
        },
        {
          username: "Princeton92",
          email: "princeton@gmail.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_login: new Date(),
        },
        {
          username: "kelsey-the-coder",
          email: "kelsey@gmail.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_login: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
