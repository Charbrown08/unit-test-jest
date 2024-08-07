let users = []

const initializeUserDatabase = () => {
  users = ['Thomas']
}
const initializeUserDatabaseAll = () => {
  users = ['Maria']
}

const clearUserDatabase = () => {
  users = []
}
const clearUserDatabaseAll = () => {
  users = ['Thank you!']
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
  initializeUserDatabaseAll,
  clearUserDatabaseAll,
}
