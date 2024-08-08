const { forEach } = require('@functions/07-mockFunctions')

describe('mock function', () => {
  const mockSumFunction = jest.fn()
  mockSumFunction.mockReturnValue('mocked value')
  test('should return the sum of two numbers', () => {
    const result = mockSumFunction()
    expect(result).toBe('mocked value')
  })

  test('mock function  test', () => {
    const mock = jest.fn()

    mock()

    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
  })
})

describe('mock function by callback ', () => {
  const mockCallback = jest.fn((x) => 42 + x)
  test('should call the callback with argument 0', () => {
    forEach([0, 1], mockCallback)

    // mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2)

    // The first argument of of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1)

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42)
  })
})

describe('mock property', () => {
  const myMock1 = jest.fn()
  const a = new myMock1()
  it('should store instances created with new', () => {
    expect(myMock1.mock.instances[0]).toBe(a)
  })

  it('should store contexts when bound', () => {
    const myMock2 = jest.fn()
    const b = {}
    const bound = myMock2.bind(b)
    bound()

    // > [ <b> ]

    expect(myMock2.mock.contexts[0]).toBe(b)
  })
})
