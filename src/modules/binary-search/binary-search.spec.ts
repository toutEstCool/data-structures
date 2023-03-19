import assert from "assert";
import { binarySearch } from '.';

describe("binarySearch", function () {
    it("Поиск элементов", function () {
        const arr = [13, 17, 23, 31, 40, 41, 46, 54, 56, 76];
        assert.strictEqual(binarySearch(13, arr), 0);
        assert.strictEqual(binarySearch(23, arr), 2);
        assert.strictEqual(binarySearch(40, arr), 4);
        assert.strictEqual(binarySearch(54, arr), 7);
        assert.strictEqual(binarySearch(76, arr), 9);
        assert.strictEqual(binarySearch(100, arr), -1);
    });
})