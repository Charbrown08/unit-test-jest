/**
 * Calculates the volume of a rectangular prism.
 * @param {number} length - The length of the prism.
 * @param {number} height - The height of the prism.
 * @param {number} width - The width of the prism.
 * @returns {number} The volume of the rectangular prism.
 * @example
 * const volume = prismaVolume(10, 5, 3); // Returns 150
 */
const prismVolume = (length, height, width) => {
  return length * height * width
}

module.exports = prismVolume
