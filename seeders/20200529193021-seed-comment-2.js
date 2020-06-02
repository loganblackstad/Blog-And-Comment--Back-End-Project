"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        author: "john_doe_3",
        remark: "Seed Remark 1 - This is the Shizz!",
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
        user_id: 4,
      },
      {
        author: "kelsey-the-coder",
        remark: "Seed Remark 2 - Coding my socks Off!",
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
        user_id: 5,
      },
      {
        author: "john_doe_3",
        remark: "Seed Remark 3 - We're gonna Sequelize this B",
        post_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
        user_id: 4,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
