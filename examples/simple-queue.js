const {SimpleQueue} = require('../dist')

const queue = new SimpleQueue();

queue.push(1);
queue.push(2);
queue.push(3);

// console.log(queue.head) // 1
// console.log(queue.shift()) // 1
// console.log(queue.shift()) // 2
// console.log(queue.shift()) // 3
// console.log(queue.shift()) // Exception

for (let val of queue.values) {
    console.log('val:', val)
}