const axios = require('axios')
const getOneProduct = require('../../src/services/platziApi')

jest.mock('axios')

const fakeProduct = {
  name: 'Product 1',
  price: 10,
  description: 'Description 1',
}

describe('Test mocking module axios', () => {
  test('getOneProduct', () => {
    const response = { data: fakeProduct }
    axios.get.mockResolvedValue(response)

    return getOneProduct().then((product) =>
      expect(product).toEqual(fakeProduct),
    )
  })
})
