/**
 * volume of a cylinder
 * V=π⋅r2⋅h
 * @param {number} radius
 * @param {number} heigth
 * @returns {number} volume
 * @example:
 * cylinderVolume(3, 4) // 113.09733552923255
 */

cylinderVolume = (radius, heigth) => {
  return Math.PI * Math.pow(radius, 2) * heigth
}

module.exports = cylinderVolume
