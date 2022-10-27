const express = require("express");
const { getUsers } = require("../models/controlers");
const usersRouter = express.Router();

//USERS
usersRouter.use("/", (req, res) => {
  //ruta get users -> para traer a todos los usuarios o que busque por nombre.
  const users = getUsers();
  res.status(200).send(users);
});

//ruta get users/:id -> para trer usuarios por id.
//ruta post users -> para crear un nuevo usuario.
//ruta put users -> para modificar un usuario.
//ruta delete users -> para borrar usuarios.

module.exports = usersRouter;
