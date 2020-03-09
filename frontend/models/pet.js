'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    name: DataTypes.STRING,
    about_pet: DataTypes.STRING,
    gender: DataTypes.ENUM(['male', 'female']),
    age: DataTypes.ENUM(['child', 'adult']),
    photo: DataTypes.STRING,
    species_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  pet.associate = function(models) {
    pet.belongsTo(models.species, {
      // as: "createdBy",
      foreignKey: "species_id"
    });

    pet.belongsTo(models.user, {
      // as: "createdBy",
      foreignKey: "user_id",
    });
    // associations can be defined here
  };
  return pet;
};