const {DoubleQueue} = require('../dist')

const queue = new DoubleQueue();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.head) // 1
console.log(queue.back) // 3

queue.unshift(0);
console.log(queue.shift()) // 0
console.log(queue.pop()) // 3
// console.log(queue.shift()) // 1
// console.log(queue.shift()) // 2
// console.log(queue.shift()) // Exception

for (let val of queue.values) {
    console.log('val:', val)
}