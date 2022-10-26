const express = require("express");
const morgan = require("morgan");

const server = express();
server.use(express.json());
server.use(morgan("dev"));

const usersRouter = require("./routes/usersRouter");
server.use("/users", usersRouter);
const postsRouter = require("./routes/postsRouter");
server.use("/posts", postsRouter);


server.get("/", (req, res) => {
    res.send("hello world!")
})

module.exports =  server;