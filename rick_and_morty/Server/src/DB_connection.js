require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DEPLOY } = process.env;
const FavoriteModel = require('../src/models/Favorite');
const UserModel = require('../src/models/User');
// const User = require('../src/models/User');
// const Favorite = require('../src/models/Favorite');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
// const sequelize = new Sequelize(
//    // URL
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/rickandmorty`,
//    { logging: false, native: false }
// );

const sequelize = new Sequelize(
  // URL
  DB_DEPLOY,
  { logging: false, native: false }
);

// Para probar la conexion a la BDD:
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a:", `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/rickandmorty`);
  })
  .catch((error) => {
    console.log("Fallo: ", error.message);
  });

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize);

UserModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};