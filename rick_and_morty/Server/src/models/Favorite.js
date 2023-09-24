const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         defaultValue: "Alive",
      },
      species: {
         type: DataTypes.ENUM("Human", "Alien", "Humanoid", "Animal", "Poopybutthole", "Mytholog", "Robot", "Cronenberg", "Disease", "Parasite", "unknown"),
         allowNull: true
      },
      gender: {
         type: DataTypes.ENUM("Male", "Female", "Genderless", "unknown")
      },
      origin: {
         type: DataTypes.STRING,
         // foreignKey: true
      },
      image: {
         type: DataTypes.BLOB, //see below BLOB in comment
          allowNull: false,
      }
   }, { timestamps: false });
};

//Sequelize, which is an Object-Relational Mapping (ORM) library for Node.js, does not have a specific data type for images. In Sequelize, you typically store binary data, such as images, in a BLOB (Binary Large Object) field.