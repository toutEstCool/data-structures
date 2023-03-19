const {BinaryTree} = require("../dist");

const tree = new BinaryTree([50, 20, 70, 10, 30, 80, 55]);
// tree.insert(50);

// console.log(tree.root)
// console.log([...tree.values()])
// console.log([...tree.symmetricalValues()])
// console.log([...tree.reversedValues()])
// console.log([...tree.widthValues()])

// console.log(tree.has(80)) // true
// console.log(tree.has(10)) // true
// console.log(tree.has(51)) // false

// console.log(tree.min()) // 10
// console.log(tree.max()) // 80

// console.log(tree.delete(10)) // true
// console.log([...tree.values()])
// console.log(tree.delete(20)) // true
console.log([...tree.values()])

// const tree2 = new BinaryTree([50, 75, 62, 87, 77, 93, 79]);
// console.log([...tree2.values()])
// console.log(tree2.delete(75))
// console.log([...tree2.values()])