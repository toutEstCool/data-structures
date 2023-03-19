const {HashMap} = require('../dist');

const map = new HashMap(3);
// const map = new HashMap(12); // Error

map.set('name', 'Albert');
map.set('age', 35);
map.set('age1', 35);
map.set('aasdfasdf2', 35);
map.set('as', 35);
map.set('ty', 35);
map.set('sjjasdf', 35);
// map.set('age4', 35);
// map.set('age5', 35);
map.set('skills', ['JS', 'PHP']);
// map.set('<asdfe>', 'Albert 645') // Error

// console.log(map.get('name'))
// console.log(map.get('age'))
// console.log(map.get('skills'))
// console.log(map.get('123')) // Error

// console.log([...map.keys()])
// console.log([...map.values()])
// console.log([...map.entities()])
console.log(map.capacity)
