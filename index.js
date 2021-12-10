const binarySearch = require('./binarySearch')
const selectedSort = require('./selected-sort')
const countDown = require('./recursion/countDown')
const fact = require('./recursion/factorial')

const list = new Array(100).fill(null).map((_, i) => i + 1)

// console.log(binarySearch(list, 57))
// console.log(selectedSort([1, 5, 6, 4, 40, 34, 524, 1234, 2133, 33]))
// countDown(50)
console.log(fact(5))
