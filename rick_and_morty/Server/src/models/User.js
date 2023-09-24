const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      email: {
         type: DataTypes.STRING,
         isEmail: true,
         notNull: false
      },
      password: {
         type: DataTypes.STRING,
         is: [/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/], //regex
         len: [4, 15],
         notNull: false
      }
   }, { timestamps: false });
};
