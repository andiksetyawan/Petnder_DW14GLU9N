"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      about_pet: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["male", "female"]
      },
      age: {
        type: Sequelize.ENUM,
        values: ["child", "adult"]
      },
      photo: {
        type: Sequelize.STRING,
        defaultValue:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/237/dog-face_1f436.png"
      },
      species_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "species",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pets");
  }
};
