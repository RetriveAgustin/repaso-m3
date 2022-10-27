const { Router } = require("express");
const { createPost } = require("../models/controlers");
const postsRouter = Router();

//POSTS
postsRouter.get("/", (req, res) => {
  //ruta get posts -> para traer los posteos.
});

postsRouter.post("/", (req, res) => {
  //ruta post posts -> para crear posteos.
  try {
    const { userId, title, contents } = req.body;
    if (!userId || !title || !contents) throw new Error("missing ingo");

    const newPost = createPost(title, contents, userId);
    res.status(200).json(newPost);
  } catch {
    res.status(400).json(error.message);
  }
});

//ruta get posts/:id -> para traer posteos por id.

//ruta put posts -> para modificar un posteo.
//ruta delete posts -> para borrar posteos.

module.exports = postsRouter;
