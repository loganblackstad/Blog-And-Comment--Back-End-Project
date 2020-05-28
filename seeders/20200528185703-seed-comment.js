"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        author: "john_doe_3",
        remark: "This is the Shizz!",
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
      },
      {
        author: "kelsey-the-coder",
        remark: "Coding my socks Off!",
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
      },
      {
        author: "john_doe_3",
        remark: "We're gonna Sequelize this B",
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
