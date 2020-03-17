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
      "pets",
      [
        {
          name: "John Doe",
          species_id: 1,
          user_id: 1,
          age: "child",
          photo: "abc.jpg",
          gender: "male",
          about_pet: "this dummy about",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pet 2",
          species_id: 1,
          user_id: 1,
          age: "child",
          photo: "cde.jpg",
          gender: "male",
          about_pet: "this dummy about 2",
          createdAt: new Date(),
          updatedAt: new Date()
        },

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
    return queryInterface.bulkDelete("pets", null, {});
  }
};
