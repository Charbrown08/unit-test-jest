const cylinderVolume = require('@functions/01-cylinderVolume')

test('one cylinder with radius 3 meters and height 4 meters to equal 81.92809488736235 meters ', () => {
  expect(cylinderVolume(3, 4)).toBe(113.09733552923255)
})

test('one cylinder with radius 4 meters and height 4 meters to equal 201.06192982974676 meters ', () => {
  let result = cylinderVolume(4, 4)
  expect(result).toBe(201.06192982974676)
})

test('one cylinder with radius 5 meters and height 4 meters is not equal to 201.06192982974676 meters ', () => {
  let result = cylinderVolume(5, 4)
  expect(result).not.toBe(201.06192982974676)
})
