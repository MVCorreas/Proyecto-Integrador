const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         isEmail: true,
         allowNull: false
      },
      password: {
         type: DataTypes.STRING,
         is: [/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/], //regex
         len: [4, 15],
         allowNull: false
      }
   }, { timestamps: false });
}; 
