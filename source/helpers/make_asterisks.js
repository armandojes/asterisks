// make asterisks
// example input: 2 output: **
function makeAsterisks (num) {
  var index = 1
  var result = ''
  while (index <= num) {
    result += '*'
    index++
  }
  return result
}

export default makeAsterisks
