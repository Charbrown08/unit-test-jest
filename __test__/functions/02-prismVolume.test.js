const prismVolume = require('@functions/02-prismVolume')

test('The volume of prism with length 5m, heigth 5m and width 8m is to equal 200  square meters', () => {
  let result = prismVolume(5, 5, 8)
  expect(result).toBe(200)
})
