import assert from 'assert';
import { DoubleQueue } from '.';

const createDoubleQueue = () => {
    const queue = new DoubleQueue<number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    return queue;
}

describe("DoubleQueue", function () {

    const queue = createDoubleQueue();

    it("Создание очереди", function () {
        assert.strictEqual(new DoubleQueue() instanceof DoubleQueue, true);
    });

    it("Получение значения головы очереди", function () {
        assert.strictEqual(queue.head, 1);
    });

    it("Получение значения конца очереди", function () {
        assert.strictEqual(queue.back, 3);
    });

    it("Извлечение значения из головы очереди", function () {
        queue.unshift(0);
        const val = queue.shift();
        assert.strictEqual(queue.head, 1);
        assert.strictEqual(val, 0);
    });

    it("Извлечение значения c конца очереди", function () {
        queue.push(5);
        const val = queue.pop();
        assert.strictEqual(queue.back, 3);
        assert.strictEqual(val, 5);
    });

    it("Извлечение значения очереди (ошибка)", function () {
        const queue = new DoubleQueue<number>();
        queue.push(1);
        queue.shift();
        assert.throws(() => queue.shift(), Error);
    });

    it("Проверка очереди на пустоту", function () {
        assert.strictEqual(queue.isEmpty(), false);
        assert.strictEqual((new DoubleQueue()).isEmpty(), true);
    });

});
