const sum = (a, b) => a + b

// note: here pass one function by parameter of other function

const forEach = (items, callback) => {
  for (const item of items) {
    callback(item)
  }
}
module.exports = { sum, forEach }
