"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      "Comments", // name of Source table
      "post_id", // name of the key we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Posts", // name of Target table
          key: "id", // key in Target table
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Comments", // name of Source table
      "post_id"
    ); // key we want to remove
  },
};
