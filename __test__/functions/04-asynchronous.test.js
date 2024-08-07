const { fetchData, fetchDataWithError } = require('@functions/04-asynchronous')

//? PROMISE
test('the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter')
  })
})

test('the fetch fails with an error ', () => {
  return fetchData().catch((e) => {
    expect(e).toMatch('error')
  })
})

test('the fetch fails an error', () => {
  return fetchDataWithError().catch((e) => {
    expect(e).toMatch('error')
  })
})

// ? ASYNC/AWAIT
test('the data is peanut butter async', async () => {
  const data = await fetchData()
  expect(data).toBe('peanut butter')
})

test('the fetch fails with an error async ', async () => {
  expect.assertions(1)
  try {
    await fetchDataWithError()
  } catch (error) {
    expect(error).toMatch('error')
  }
})

// async await with resolve and reject

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter')
})
test('the data is peanut butter', async () => {
  await expect(fetchDataWithError()).rejects.toMatch('error')
})

test('the fetch fails with an error', () => {
  expect.assertions(1)
  return fetchDataWithError().catch((error) => expect(error).toMatch('error'))
})
