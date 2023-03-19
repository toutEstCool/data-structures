# Связанный список

Создание списка
````js
const list = new LinkedList(); 
console.log('is empty', list.isEmpty()) // Проверка на пустоту
````

// Добавление элемента
````js
list.add(1) 
list.add(2)
list.add(3)
````

Обращение к элементам списка. У элементов доступны геттеры next и prev.
first и last первый и последний элементы списка.
````js
console.log(list.first.value) // 1
console.log(list.last.value) // 3
console.log(list.first.next.value) // 2
console.log(list.first.next.prev.value) // 1
````

Поиск элемента
````js
const find2 = list.find(2); // LinkedListItem
// console.log('find no strict 2: ', list.find('2', false)) // LinkedListItem
// console.log('find 5: ', list.find(5)) // null
````

Вставка элемента перед другим элементом/знечением
````js
list.insertBefore(1.5, find2)
list.insertBefore(1.5, 2)
list.insertBefore(0.5, list.first)
````

Вставка элемента после другого элемента/значения
````js
list.insertAfter(2.25, find2)
list.insertAfter(2.25, 2)
list.insertAfter(3.25, list.last)
````

Удаление элемента/значения
````js
list.delete(3.25)
list.delete(list.first)
````

Обход списка
````js
list.items              // итератор по элемента с начала списка
list.reverseItems       // итератор по элемента с конца списка
list.values             // итератор по значениям с начала списка
list.reverseValues      // итератор по значениям с конца списка
````
