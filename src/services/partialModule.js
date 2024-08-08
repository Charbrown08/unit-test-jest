const add = (a, b) => a + b
const multiply = (a, b) => a * b
const bar = () => 'default function'

module.exports = {
  multiply,
  add,
  default: bar,
}
