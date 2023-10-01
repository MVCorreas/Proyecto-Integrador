const server = require("./app");
require("dotenv").config();
const PORT = 3001;
const { conn, User } = require("./DB_connection")

conn
.sync({force: true})
.then(() => {
  server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
})
.then(async () => {
  try {
    const newUser = await User.create({
      email: "ejemplo@gmail.com",
      password: "1Password",
    });
    console.log("Se creo el usuario: ejemplo@gmail.com");

  } catch (error) {
    console.log("Error creando usuario", error);
  }
})
.catch((error) => console.log(error));

//AGREGO UN USER DE PRUEBA. 

