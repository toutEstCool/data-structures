import assert from 'assert';
import { SimpleQueue } from '.';

const createSimpleQueue = () => {
    const queue = new SimpleQueue<number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    return queue;
}

describe("SimpleQueue", function () {

    const queue = createSimpleQueue();

    it("Создание очереди", function () {
        assert.strictEqual(new SimpleQueue() instanceof SimpleQueue, true);
    });

    it("Получение значения головы очереди", function () {
        assert.strictEqual(queue.head === 1, true);
    });

    it("Извлечение значения очереди", function () {
        const val = queue.shift();
        assert.strictEqual(queue.head === 2, true);
        assert.strictEqual(val === 1, true);
    });

    it("Извлечение значения очереди (ошибка)", function () {
        const queue = new SimpleQueue<number>();
        queue.push(1);
        queue.shift();
        assert.throws(() => queue.shift(), Error);
    });

    it("Проверка очереди на пустоту", function () {
        assert.strictEqual(queue.isEmpty(), false);
        assert.strictEqual((new SimpleQueue()).isEmpty(), true);
    });

});
