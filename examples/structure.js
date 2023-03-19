const {Structure} = require('../dist');

const structure = new Structure(['name', 'age', 'prof']);

structure.set('name', 'Alex');

console.log('name: ', structure.get('name')); // 'Alex'

structure.set('name', 'Bob');
structure.set('age', 35);
structure.set('prof', true);

console.log('name: ', structure.get('name')); // 'Bob'
console.log(structure.get('age')); // 35
console.log(structure.get('prof')); // true