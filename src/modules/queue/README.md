# Очереди

## Простая очередь на основе списка
// Создание очереди
````js
const queue = new SimpleQueue();
queue.values  // итератор по значениям
````

Добавление элемента
````js
queue.push(1);
queue.push(2);
queue.push(3);
````

Геттер head получает значение очереди для извлечения
````js
console.log(queue.head) // 1
````

Извлечение значения из очереди
````js
console.log(queue.shift()) // 1
console.log(queue.shift()) // 2
console.log(queue.shift()) // 3
console.log(queue.shift()) // Exception
````

## Двухстороння очередь
Создание очереди
````js
const queue = new DoubleQueue();
queue.values // итератор по значениям
````

Добавление элемента в конец очереди
````js
queue.push(1);
queue.push(2);
queue.push(3);
````

Геттер head получает значение очереди с начала
````js
console.log(queue.head) // 1
````

Геттер back получает значение очереди с конца
````js
console.log(queue.back) // 3
````

Вставка элемента в начало очереди
````js
queue.unshift(0); 
````

Извлечение элемента из начала очереди
````js
queue.shift() 
````

Извлечение элемента из коца очереди
````js
queue.pop() 
````
