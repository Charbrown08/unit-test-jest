const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter')
    })
  }, 1000)
}

const fetchDataWithError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('error')
    })
  })
}

module.exports = { fetchData, fetchDataWithError }
