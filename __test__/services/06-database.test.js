const {
  initializeUserDatabase,
  clearUserDatabase,
  addUserDatabase,
  getAllUsersDatabase,
  getUser,
  initializeUserDatabaseAll,
  clearUserDatabaseAll,
} = require('../../src/services/06-database')

beforeAll(() => {
  console.log('Before All:level-one')
})
afterAll(() => {
  console.log('After All:level-one')
})

beforeEach(() => {
  console.log('Before Each:level-one')
})

afterEach(() => {
  console.log('After All:level-one')
})

test('Test superior level ', () => {
  console.log('1 - test (level Superior)')
})

describe('Setup and Teardown', () => {
  describe('Repeating Setup', () => {
    beforeEach(() => {
      initializeUserDatabase()
    })

    afterEach(() => {
      clearUserDatabase()
    })

    test('add one user in database', () => {
      addUserDatabase('John')
      const getUsers = getAllUsersDatabase()
      expect(getUsers).toEqual(['Thomas', 'John'])
    })

    test('add two users in database', () => {
      addUserDatabase('Jane')
      addUserDatabase('John')
      const getUsers = getAllUsersDatabase()
      expect(getUsers).toEqual(['Thomas', 'Jane', 'John'])
    })

    test('should return one specific user constructor', () => {
      const user = getUser('Thomas')
      expect(user).toBe('Thomas')
    })

    test('should return one specific user', () => {
      addUserDatabase('Jane')
      addUserDatabase('John')
      getAllUsersDatabase()
      const user = getUser('John')
      expect(user).toBe('John')
    })
  })

  describe('One-Time Setup', () => {
    beforeAll(() => {
      initializeUserDatabaseAll()
    })
    afterAll(() => {
      clearUserDatabaseAll()
    })

    test('add one user in database', () => {
      addUserDatabase('John')
      const getUsers = getAllUsersDatabase()
      expect(getUsers).toEqual(['Maria', 'John'])
    })
    test('add one more user in database', () => {
      addUserDatabase('Marcos')
      const getUsers = getAllUsersDatabase()
      expect(getUsers).toEqual(['Maria', 'John', 'Marcos'])
    })
  })
})