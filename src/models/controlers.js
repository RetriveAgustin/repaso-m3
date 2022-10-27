const usersRouter = require("../routes/usersRouter");

let users = [];
let posts = [];

const getUsers = () => {
  return users;
};

const getUsersByName = (name) => {
  const result = users.filter((user) => {
    return user.name === name;
  });
  if (result.length) return result;
  return { error: "no users found by that name" };
};

const getUsersById = (id) => {
  const result = users.find((user) => user.id === id);
  if (result) return result;
  return { error: "user not found" };
};

let id = 1;
const createUser = (name, surname, age, mail) => {
  const newUser = {
    id: id++,
    name,
    surname,
    age,
    mail,
    posts: [],
  };

  user.push(newUser);
  return newUser;
};

const updateUser = (id, name, suername, mail, age) => {
  const user = users.find((user) => user.id === id);
  if (!user) return { error: "user not found" };

  user.name = name;
  user.surname = suername;
  user.mail = mail;
  user.age = age;

  return user;
};

const deleteUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) return { error: "user not found" };

  users = users.filter(user => user.id !== id);
  return user;
};

module.exports = {
  getUsers,
  getUsersByName,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
