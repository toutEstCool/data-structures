# Динамический массив на основе связанного списка массивов

Создание массива. В конструкторе можно указать емкость чанка массива. По умолчанию 10
````js
const dynamicArray = new DynamicArray(5);
// const dynamicArray = new DynamicArray();

console.log('length: ', dynamicArray.length) // Длина массива
console.log('capacityChunk: ', dynamicArray.capacityChunk) // емкость чанка массива
console.log('is empty: ', dynamicArray.isEmpty) // Проверка на пустоту
````

Добавление элемента в конец
````js
dynamicArray.push(i)
````

Удалить последний элемент и вернуть его значение
````js
console.log('pop: ', dynamicArray.pop()) 
````

Установка значения элемента по индексу
````js
dynamicArray.set(11, 123) 
````

Добавление элемента в начало массива
````js
dynamicArray.unshift(789); 
````

Удалить первый элемент массиа и вернуть его значение
````js
console.log(dynamicArray.shift()) 
````

Удаление и добавление элементов в массиве - функция splice(idx, countDelete, insertArray).
idx - индекс с которого производится действие.
countDelete - количество удаляемых элементов.
insertArray - массив добавляемых элементов.
````js
dynamicArray.splice(3, 0, [313,314,315]) // добавление элементов по индексу 3
dynamicArray.splice(3, 3, [313,314,315]) // удаление 3 элементов начина с индекса 3 и добавление на их место новых
dynamicArray.splice(3, 3)                // удаление 3 элементов начина с индекса 3   
dynamicArray.splice(3, 3, [313,314,315,316,317])
dynamicArray.splice(3, 5, [313,314,315])
````

Получение элемента по индексу
````js
console.log(`get ${1}: `, dynamicArray.get(1)) 
console.log(`get ${111}: `, dynamicArray.get(111)) // Error
````
