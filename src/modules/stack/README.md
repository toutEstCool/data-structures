
# Лимитированный стек

Создание стека с лимитом
````js
const stack = new LimitedStack(3); 
````

Значение головы стэка
````js
console.log(stack.head) // null
````

Добавление элементов
````js
stack.push(1);
// console.log(stack.head) // 1
stack.push(2);
stack.push(3);
// stack.push(4); // Error - stack overflow
````

Количество элементов в стеке и лимит стека
````js
console.log(stack.count) // 3 
console.log(stack.limit) // 3 
````

Извлечение элемента
````js
console.log(stack.take()) // 3
// console.log(stack.take()) // 2
// console.log(stack.take()) // 1
// console.log(stack.take()) // Error - stack is empty
````

Итератор по значениям
````js
console.log([...stack.values])
````
