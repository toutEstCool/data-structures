import assert from "assert";
import { BinaryTree } from '.';

const createTree = () => {
    return new BinaryTree([50, 20, 70, 10, 30, 80, 55]);
}

describe("BinaryTree", function () {
    it("Создание + Итератор значений", function () {
        const tree = createTree();
        const need = [50, 20, 10, 30, 70, 55, 80];
        assert.deepEqual([...tree.values()], need);
    });
    it("Поиск значений", function () {
        const tree = createTree();
        assert.strictEqual(tree.has(50), true);
        assert.strictEqual(tree.has(70), true);
        assert.strictEqual(tree.has(10), true);
        assert.strictEqual(tree.has(1000), false);
    });
    it("Итератор симметричного обхода", function () {
        const tree = createTree();
        const need = [10, 20, 30, 50, 55, 70, 80];
        assert.deepEqual([...tree.symmetricalValues()], need);
    });
    it("Итератор обратного обхода", function () {
        const tree = createTree();
        const need = [10, 30, 20, 55, 80, 70, 50];
        assert.deepEqual([...tree.reversedValues()], need);
    });
    it("Итератор обхода в ширину", function () {
        const tree = createTree();
        const need = [50, 20, 70, 10, 30, 55, 80];
        assert.deepEqual([...tree.widthValues()], need);
    });
    it("Минимум и максимум", function () {
        const tree = createTree();
        assert.strictEqual(tree.min(), 10);
        assert.strictEqual(tree.max(), 80);
    });
    it("Удаление узлов", function () {
        const tree = createTree();
        const need1 = [50, 20, 30, 70, 55, 80];
        const need2 = [50, 30, 70, 55, 80];
        tree.delete(10)
        assert.deepEqual([...tree.values()], need1);
        tree.delete(20)
        assert.deepEqual([...tree.values()], need2);
    });
    it("Сложное удаление узлов", function () {
        const tree = new BinaryTree([50, 75, 62, 87, 93]);
        const need1 = [50, 87, 62, 93];
        tree.delete(75)
        assert.deepEqual([...tree.values()], need1);

        const tree2 = new BinaryTree([50, 25, 15, 35, 5, 20, 30, 40]);
        const need2 = [50, 30, 15, 5, 20, 35, 40];
        tree2.delete(25)
        assert.deepEqual([...tree2.values()], need2);

        const tree3 = new BinaryTree([50, 75, 62, 87, 77, 93, 79]);
        const need3 = [50, 77, 62, 87, 79, 93];
        tree3.delete(75)
        assert.deepEqual([...tree3.values()], need3);
    });
})