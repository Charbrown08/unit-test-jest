const axios = require('axios')

const URL = 'https://api.escuelajs.co/api/v1/products/5'

const getOneProduct = async () => {
  const response = await axios.get(URL)
  return response.data
}

getOneProduct()
  .then((product) => console.log(' product:', product))
  .catch((error) => console.error('Error getting product:', error))

module.exports = getOneProduct
