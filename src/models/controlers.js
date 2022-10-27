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

module.exports = {
  getUsers,
  getUsersByName,
  getUsersById,
  createUser,
};
