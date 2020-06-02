"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        title: "This is Easy!",
        author: "Princeton92",
        user_id: 4,
        body_content: "This is content",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sequelize is Going to Kill Me!",
        author: "logan-yeah",
        user_id: 3,
        body_content: "This is content",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Let's Pump Up the Volume!",
        author: "kelsey-the-coder",
        user_id: 5,
        body_content: "This is content",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
