"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Posts", // name of Source table
      "user_id", // name of the key we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Users", // name of Target table
          key: "id", // key in Target table
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Posts", // name of Source table
      "user_id"
    ); // key we want to remove
  },
};
