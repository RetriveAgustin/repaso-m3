const express = require("express");
const morgan = require("morgan");
const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
    res.send("hello world!")
})

//USERS
//ruta get users -> para traer a todos los usuarios o que busque por nombre.
//ruta get users/:id -> para trer usuarios por id.
//ruta post users -> para crear un nuevo usuario.
//ruta put users -> para modificar un usuario.
//ruta delete users -> para borrar usuarios.

//POSTS
//ruta get posts -> para traer los posteos.
//ruta get posts/:id -> para traer posteos por id.
//ruta post posts -> para crear posteos.
//ruta put posts -> para modificar un posteo.
//ruta delete posts -> para borrar posteos.


module.exports =  server;