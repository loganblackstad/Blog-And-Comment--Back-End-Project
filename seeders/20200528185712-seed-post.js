"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        title: "This is Easy!",
        author: "Princeton92",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sequelize is Going to Kill Me!",
        author: "logan-yeah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Let's Pump Up the Volume!",
        author: "kelsey-the-coder",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
