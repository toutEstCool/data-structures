const {binarySearch} = require('../dist')

const arr = [13, 17, 23, 31, 40, 41, 46, 54, 56, 76];

console.log(binarySearch(13, arr))
console.log(binarySearch(17, arr))
console.log(binarySearch(23, arr))
console.log(binarySearch(31, arr))
console.log(binarySearch(40, arr))
console.log(binarySearch(41, arr))
console.log(binarySearch(46, arr))
console.log(binarySearch(54, arr))
console.log(binarySearch(56, arr))
console.log(binarySearch(76, arr)) // 9
console.log(binarySearch(100, arr)) // -1
