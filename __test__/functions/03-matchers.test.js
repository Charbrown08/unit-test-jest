/*
 *"To be " vs "To equal"
 */

/**
 * Use "to be " when you want to compare primitive values of exactly object references
 * Use "to equal" when you want to compare objects
 *
 */

test('sums of numbers', () => {
  const result = 2 + 3
  expect(result).toBe(5)
})

// ? TO BE

test('compare objects use "to be" exact references', () => {
  // no references
  const user1 = { name: 'John' }
  const user2 = { name: 'John' }
  // references
  const a = 'maria'
  const b = a
  expect(b).toBe(a)
  expect(user1).not.toBe(user2)
})

test('compare object using "to equal" ', () => {
  const user1 = { name: 'John', age: 30 }
  const user2 = { name: 'John', age: 30 }
  // verify if user1 have to equal properties and values of user2
  expect(user1).toEqual(user2)
})

test('compare arrays using "to equal"', () => {
  const fruits1 = ['apple', 'banana', 'orange']
  const fruits2 = ['apple', 'banana', 'orange']
  // verify is array fruits1 has same elements and order of fruits2
  expect(fruits1).toEqual(fruits2)
})

test('compare strict objects', () => {
  const obj1 = { name: 'Alice', age: undefined }
  const obj2 = { name: 'Alice' }
  expect(obj1).not.toStrictEqual(obj2)
})

//?TO EQUAL
test('compare strict  arrays', () => {
  const arr1 = [1, 2, undefined]
  const arr2 = [1, 2]
  expect(arr1).not.toStrictEqual(arr2)
})

test('adds two numbers is not positive', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

// ? TRUTHINESS

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

// ? NUMBERS

test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

// ? STRINGS

test('there is no I in team', () => {
  const word = 'team'
  expect(word).not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  const name = 'Christoph'
  expect(name).toMatch(/stop/)
})

// ? Arrays and iterables

test('the shopping list has milk on it ', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]

  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

// ? Exceptions

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!')
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)

  // Or you can match an exact error message using a regexp like below
  //   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/) // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/) // Test pass
})
