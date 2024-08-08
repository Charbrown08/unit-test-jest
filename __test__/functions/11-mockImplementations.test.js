const data = require('../../src/functions/11-mockImplementations')
jest.mock('../../src/functions/11-mockImplementations')

// mock function

test('mock function', () => {
  const simpleMock = jest.fn((x) => x * 2)
  console.log('test simpleMock1:', simpleMock(2))
  console.log('test simpleMock2:', simpleMock(3))
})

test('mock implementation ', () => {
  data.mockImplementation(() => 'false')

  console.log('test mockImplementation:', data())
})

test('mock implementation once', () => {
  data.mockImplementationOnce(() => 'true')

  console.log('test mockImplementationOnce:', data())
  console.log('test mockImplementationOnce:', data())
})

describe('mock return value', () => {
  const simpleMock1 = jest
    .fn()
    .mockImplementationOnce(() => 'false')
    .mockImplementationOnce(() => 'true')
    .mockImplementationOnce(() => 'false')

  console.log('test simpleMock1:', simpleMock1())
  console.log('test simpleMock1:', simpleMock1())
  console.log('test simpleMock1:', simpleMock1())
  console.log('test simpleMock1:', simpleMock1())
  console.log('test simpleMock1:', simpleMock1())
})

describe('mockReturnThis', () => {
  const obj = {
    value: 42,
    increment: jest.fn().mockReturnThis(),
    getValue: jest.fn().mockReturnValue(this.value),
  }
  test('should first', () => {
    const a = obj.increment().increment()
    console.log('🚀 ~ describe ~ a :', a)
  })
})
