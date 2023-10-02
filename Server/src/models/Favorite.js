const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         defaultValue: "unknown",
         allowNull: false
      },
      species: {
         type: DataTypes.ENUM("Human", "Alien", "Humanoid", "Animal", "Poopybutthole", "Mytholog", "Robot", "Cronenberg", "Disease", "Parasite", "unknown"),
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM("Male", "Female", "Genderless", "unknown"),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         // foreignKey: true
         allowNull: false
      },
      image: {
         type: DataTypes.BLOB, //see below BLOB in comment //Other option is CLOUDINARY
          allowNull: false,
      }
   }, { timestamps: false }); 
};

//Sequelize, which is an Object-Relational Mapping (ORM) library for Node.js, does not have a specific data type for images. In Sequelize, you typically store binary data, such as images, in a BLOB (Binary Large Object) field.