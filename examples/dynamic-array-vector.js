const {DynamicArrayVector} = require('../dist');

const dynamicArray = new DynamicArrayVector();
// const dynamicArray = new DynamicArrayVector(5);

for (let i = 1; i <= 10; i++) {
    dynamicArray.push(i)
}

console.log(dynamicArray.get(5)) // 6
// console.log(dynamicArray.get(11)) // Error

// console.log(dynamicArray.length)
// console.log(dynamicArray.capacity)

console.log([...dynamicArray])

