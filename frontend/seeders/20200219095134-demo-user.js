"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "test@gmail.com",
          password: "$2b$10$dpn1IZOfxPZhYFoGvftZcOzo140hFIwgHNPWyJqypVHc7VJqj7cRG",//1234
          address: "Jalan Elang VI",
          phone: "0812305433340",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe 2",
          email: "test2@gmail.com",
          password: "$2b$10$dpn1IZOfxPZhYFoGvftZcOzo140hFIwgHNPWyJqypVHc7VJqj7cRG",//1234
          address: "Jalan Elang VI 2",
          phone: "0812305433340",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  }
};
