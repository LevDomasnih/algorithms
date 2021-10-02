const binarySearch = require('./binarySearch')

const list = new Array(9999999).fill(null).map((_, i) => i + 1)

console.log(binarySearch(list, 17))