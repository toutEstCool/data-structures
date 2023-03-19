const {DynamicArray} = require('../dist');

const dynamicArray = new DynamicArray(5);
// const dynamicArray = new DynamicArray();

// console.log('length: ', dynamicArray.length)
// console.log('capacityChunk: ', dynamicArray.capacityChunk)
// console.log('is empty: ', dynamicArray.isEmpty)

for (let i = 1; i <= 12; i++) {
    dynamicArray.push(i)
}

// console.log('pop: ', dynamicArray.pop())

// dynamicArray.set(11, 123)

// dynamicArray.unshift(789);

for (let item of dynamicArray.items) {
    console.log(item)
}

console.log('----------------')

console.log(dynamicArray.shift())
//
// for (let item of dynamicArray.items) {
//     console.log(item)
// }

// dynamicArray.splice(3, 0, [313,314,315])
// dynamicArray.splice(3, 3, [313,314,315])
// dynamicArray.splice(3, 3)
// dynamicArray.splice(3, 3, [313,314,315,316,317])
// dynamicArray.splice(3, 5, [313,314,315])

// for (let item of dynamicArray.items) {
//     console.log(item)
// }

// console.log(`get ${11}: `, dynamicArray.get(11)) // Error

console.log('length: ', dynamicArray.length)

