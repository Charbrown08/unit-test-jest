test('test   instances of mocks', async () => {
  const mock1 = jest.fn()
  console.log('🚀 ~ mock1 :', mock1)

  const instanceA = new mock1()
  console.log('🚀 ~ instanceA :', instanceA)

  // review value of instances of class
  console.log('Instances of class ', mock1.mock.instances[0])
})

test('test context of mocks ', () => {
  const mock2 = jest.fn()
  const b = {}
  const bound = mock2.bind(b)
  bound()
  console.log('Context', mock2.mock.contexts)
})

test('return mock', () => {
  const fake = jest.fn()
  fake.mockReturnValue('hello')
  fake()
  expect(fake.mock.calls).toHaveLength(1)
  expect(fake.mock.results[0].value).toBe('hello')
})

test('mock return values', () => {
  const myMock = jest.fn()
  console.log('🚀 ~ test ~ myMock :', myMock)

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)

  console.log('Call1', myMock())
  console.log('Call2', myMock())
  console.log('Call3', myMock())
  console.log('Call4', myMock())

  console.log('callsCountArray', myMock.mock.calls)
  console.log('callsCountArrayItem0ne', myMock.mock.calls[0])

  expect(myMock.mock.calls).toHaveLength(4)

  expect(myMock.mock.results[0].value).toBe(10)
  expect(myMock.mock.results[1].value).toBe('x')
  expect(myMock.mock.results[2].value).toBe(true)
  expect(myMock.mock.results[3].value).toBe(true)
})

test('Filter test', () => {
  const filterMock = jest.fn()

  filterMock.mockReturnValueOnce(true).mockReturnValueOnce(false)
  const result = [11, 12].filter((num) => filterMock(num))
  console.log('array result', result)
  expect(filterMock.mock.calls).toHaveLength(2)
  console.log(filterMock.mock.calls[0][0])
  expect(filterMock.mock.calls[0][0]).toBe(11)
  console.log(filterMock.mock.calls[1][0])
  expect(filterMock.mock.calls[1][0]).toBe(12)
})
