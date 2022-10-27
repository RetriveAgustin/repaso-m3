const express = require("express");
const {
  getUsers,
  getUsersByName,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../models/controlers");
const usersRouter = express.Router();

//USERS
usersRouter.get("/", (req, res) => {
  //ruta get users -> para traer a todos los usuarios o que busque por nombre.
  const { name } = req.query;
  if (name) {
    const users = getUsersByName(name);
    if (users["error"]) return res.status(404).json(users);
    else return res.status(200).json(users);
  } else {
    const users = getUsers();
    return res.status(200).json(users);
  }
});

usersRouter.post("/", (req, res) => {
  //ruta post users -> para crear un nuevo usuario.
  const { name, surname, mail, age } = req.body;
  if (!name || !surname || !mail || !age)
    return res.status(400).json({ error: "missing info" });

  const newUser = createUser(name, surname, mail, age);
  res.status(200).json(newUser);
});

usersRouter.get("/:id", (req, res) => {
  //ruta get users/:id -> para trer usuarios por id.
  const { id } = req.params;
  const user = getUsersById(id);
  if (user["error"]) return res.status(404).json(user);
  else res.status(200).json(user);
});

usersRouter.post("/createuser", (req, res) => {
  //ruta put users -> para modificar un usuario.
  const { name, surname, mail, age } = req.body;
  if (!name || !surname || !mail || !age)
    return res.status(400).json({ error: "missing info" });

  const updatedUser = updateUser(id, name, surname, mail, age);
  if (updatedUser["error"]) return res.status(400).json(updatedUser);
  else res.status(200).json(updatedUser);
});

usersRouter.delete("/:id", (req, res) => {
  //ruta delete users -> para borrar usuarios.
  const {id} = req.params;
  const deletedUser = deleteUser(id);
  
  if(deletedUser["error"]) return res.status(404).json({error:"user not found"})
  else res.status(200).json(deletedUser);
});



module.exports = usersRouter;
