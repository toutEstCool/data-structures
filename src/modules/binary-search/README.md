# Бинарный поиск

Поиск осуществляется в упорядоченном массиве.
Первым аргументом функции указывается искомый элемент, вторым массив в котором осуществляетсяя поиск
````js
const arr = [13, 17, 23, 31, 40, 41, 46, 54, 56, 76];

console.log(binarySearch(13, arr)) // 0
console.log(binarySearch(40, arr)) // 4
console.log(binarySearch(76, arr)) // 9
console.log(binarySearch(100, arr)) // -1
````
