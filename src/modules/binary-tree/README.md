# Двоичное дерево

Создание дерева. 
Конструктор содержит необязательный параметр типа массив для инициализации дерева
````js
const tree = new BinaryTree([50, 20, 70, 10, 30, 80, 55]);
````

Добавление новых элементов
````js
tree.insert(50);
````

Получение минимального и максимального значение в дереве
````js
console.log(tree.min()) // 10
console.log(tree.max()) // 80
````

Обходы дерева. При обходе возвращается итератор на значение.
````js
console.log([...tree.values()]) // прямой обход
console.log([...tree.symmetricalValues()]) // симметричный
console.log([...tree.reversedValues()]) // обратный
console.log([...tree.widthValues()]) // В ширину
````

Поиск элемента в дереве. Возвращает булево.
````js
console.log(tree.has(80)) // true
console.log(tree.has(10)) // true
console.log(tree.has(51)) // false  
````

Удаление элемента из дерева. Возвращает булево.
````js
console.log(tree.delete(10)) // true
````
