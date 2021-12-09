const binarySearch = require('./binarySearch')

const list = new Array(100).fill(null).map((_, i) => i + 1)

console.log(binarySearch(list, 57))