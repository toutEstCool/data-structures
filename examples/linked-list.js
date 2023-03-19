const {LinkedList} = require('../dist')

const list = new LinkedList();

console.log('is empty', list.isEmpty())

list.add(1)
list.add(2)
list.add(3)

console.log(list.first.value) // 1
console.log(list.last.value) // 3
console.log(list.first.next.value) // 2
console.log(list.first.next.prev.value) // 1

// console.log('is empty', list.isEmpty())

const find2 = list.find(2); // ILinkedListItem

console.log('find 2: ', find2.prev)
// console.log('find no strict 2: ', list.find('2', false)) // ILinkedListItem
// console.log('find 2: ', list.find(5)) // null

// list.insertBefore(1.5, find2)
// list.insertBefore(0.5, list.first)
// list.insertBefore(2.5, list.last)

// list.insertAfter(2.25, find2)
// list.insertAfter(1.25, list.first)
// list.insertAfter(3.25, list.last)

// list.delete(3.25)
// list.delete(list.first)

for (let item of list.items) {
    console.log('item: ', item)
}
for (let item of list.values) {
    console.log('val: ', item)
}