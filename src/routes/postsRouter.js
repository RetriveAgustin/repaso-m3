const { Router } = require("express");
const postsRouter = Router();

//POSTS
//ruta get posts -> para traer los posteos.
//ruta get posts/:id -> para traer posteos por id.
//ruta post posts -> para crear posteos.
//ruta put posts -> para modificar un posteo.
//ruta delete posts -> para borrar posteos.

module.exports = postsRouter;