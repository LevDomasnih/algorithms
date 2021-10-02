const binarySearch = require('./binarySearch')

const list = new Array(128).fill(null).map((_, i) => i + 1)

console.log(binarySearch(list, 96))