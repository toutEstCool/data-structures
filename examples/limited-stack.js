const {LimitedStack} = require("../dist");

const stack = new LimitedStack(3);

// console.log(stack.head) // null

stack.push(1);
// console.log(stack.head) // 1
stack.push(2);
stack.push(3);
// stack.push(4); // Error - stack overflow

// console.log(stack.count) // 3
// console.log(stack.limit) // 3

console.log(stack.take()) // 3
// console.log(stack.take()) // 2
// console.log(stack.take()) // 1
// console.log(stack.take()) // Error - stack is empty

for (let val of stack.values) {
    console.log('val: ', val)
}
