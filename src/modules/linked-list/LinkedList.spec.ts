import assert from 'assert';
import { LinkedList } from '.';

const createBaseList = () => {
    const list = new LinkedList<any>();
    list.add(1);
    list.add(2);
    list.add(3);
    return list;
}

describe("LinkedList", function () {

    const list = createBaseList();

    it("Создание списка", function () {
        assert.strictEqual(new LinkedList() instanceof LinkedList, true);
    });

    it("Создание цепочки значений", function () {
        assert.strictEqual(
            list.first?.value === 1
            && list.last?.value === 3
            && list.first?.next?.value === 2
            && list.first?.next?.prev?.value === 1,
            true
        );
    });

    it("Поиск значения", function () {
        const find = list.find(2);
        assert.strictEqual(
            find !== null && find.value === 2,
            true
        );
    });

    it("Поиск значения в нестрогом режиме", function () {
        const find = list.find('2', false);
        assert.strictEqual(
            find !== null && find.value === 2,
            true
        );
    });

    it("Поиск несуществующего значения", function () {
        const find = list.find(200);
        assert.strictEqual(find === null, true);
    });

    it("Вставка значения перед", function () {
        const newItemF = list.first ? list.insertBefore(0.5, list.first) : null;
        const find = list.find(2);
        const newItem = find ? list.insertBefore(1.5, find) : null;
        const newItemL = list.last ? list.insertBefore(2.5, list.last) : null;

        assert.strictEqual(
            newItemF === list.first
            && newItem?.next === find
            && newItemL?.next === list.last,
            true
        );
    });

    it("Вставка значения после", function () {
        const newItemF = list.first ? list.insertAfter(0.75, list.first) : null;
        const find = list.find(2);
        const newItem = find ? list.insertAfter(2.25, find) : null;
        const newItemL = list.last ? list.insertAfter(3.5, list.last) : null;

        assert.strictEqual(
            newItemF?.prev === list.first
            && newItem?.prev === find
            && newItemL === list.last,
            true
        );
    });

    it("Удаление значения", function () {
        list.last ? list.insertAfter(500, list.last) : null;
        assert.strictEqual(list.delete(500), true);
    });

    it("Удаление значения по ссылке", function () {
        assert.strictEqual(list.delete(list.first), true);
    });


    it("Удаление несуществующего значения", function () {
        assert.strictEqual(list.delete(100), false);
    });

    it("Проверка списка на пустоту", function () {
        assert.strictEqual(list.isEmpty(), false);
        assert.strictEqual((new LinkedList()).isEmpty(), true);
    });
});
