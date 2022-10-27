const express = require("express");
const usersRouter = express.Router();

//USERS
usersRouter.use("/", (req, res) => {
  res.send("This is the Users Route.");
});

//ruta get users -> para traer a todos los usuarios o que busque por nombre.
//ruta get users/:id -> para trer usuarios por id.
//ruta post users -> para crear un nuevo usuario.
//ruta put users -> para modificar un usuario.
//ruta delete users -> para borrar usuarios.

module.exports = usersRouter;
