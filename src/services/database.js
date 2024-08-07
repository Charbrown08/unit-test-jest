let users = []

const initializeUserDatabase = () => {
  users = ['Thomas']
}

const clearUserDatabase = () => {
  users = []
}

const addUserDatabase = (name) => {
  users.push(name)
}

const getAllUsersDatabase = () => {
  return users
}

const getUser = (name) => {
  return users.find((user) => user === name)
}

module.exports = {
  initializeUserDatabase,
  clearUserDatabase,
  addUserDatabase,
  getAllUsersDatabase,
  getUser,
}
