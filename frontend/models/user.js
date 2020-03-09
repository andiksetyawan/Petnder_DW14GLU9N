"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      level: DataTypes.ENUM(["client", "admin"])
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
    // user.belongsTo(models.user, {
    //   // as: "createdBy",
    //   foreignKey: "user_id"
    // });
  };
  return user;
};
