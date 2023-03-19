import {LinkedList} from '../linked-list';
import {
    DynamicArray as AbstractDynamicArray,
    ArrayItem,
    IterableDynamicArray,
    IteratorDynamicArray,
    ListItem
} from './interfaces';

export default class DynamicArray<T = unknown> implements AbstractDynamicArray<T> {
    #list: LinkedList<ListItem<T>>;
    readonly capacityChunk: number;
    #length: number = 0;

    constructor(capacityChunk: number = 10) {
        this.capacityChunk = capacityChunk;
        this.#list = new LinkedList();
    }

    get length(): number {
        return this.#length;
    }

    get isEmpty(): boolean {
        return this.#list.isEmpty();
    }

    get(idx: number): ArrayItem<T> {
        this.verifyIndex(idx);
        let maxRow = this.capacityChunk - 1;
        for (let arr of this.#list.values) {
            if (idx <= maxRow) {
                const newIdx = idx % this.capacityChunk;
                return arr[newIdx];
            }
            maxRow += this.capacityChunk;
        }
        throw new Error('Error get element by index');
    }

    set(idx: number, value: T): void {
        this.verifyIndex(idx);
        let maxRow = this.capacityChunk - 1;
        for (let arr of this.#list.values) {
            if (idx <= maxRow) {
                const newIdx = idx % this.capacityChunk;
                arr[newIdx] = value;
                break;
            }
            maxRow += this.capacityChunk;
        }
    }

    pop(): ArrayItem<T> {
        if (this.#list.last) {
            const idx = --this.#length % this.capacityChunk;
            const arr = this.#list.last.value;
            const value = arr[idx];
            arr[idx] = undefined;
            if (idx === 0) {
                this.#list.delete(this.#list.last);
            }
            return value;
        }
        throw new Error('Array is empty');
    }

    push(value: T): void {
        const idxAdd = this.#length % this.capacityChunk;
        if (idxAdd === 0) {
            this.addEmptyArray();
        }
        if (this.#list.last) {
            const tail = this.#list.last.value;
            tail[idxAdd] = value;
            this.#length++;
        }
    }

    shift(): ArrayItem<T> {
        if (this.#list.first) {
            const value = this.#list.first.value[0];
            this.moveElements(1, -1);
            return value;
        }
        throw new Error('Array is empty');
    }

    unshift(value: T): void {
        if (!this.isEmpty) {
            this.moveElements(0, 1)
        } else {
            this.addEmptyArray();
        }
        if (this.#list.first) {
            this.#list.first.value[0] = value;
            if (this.isEmpty) {
                this.#length++;
            }
        }
    }

    get values(): Iterable<ArrayItem<T>> {
        const list = this.#list;
        return {
            * [Symbol.iterator](): Iterator<ArrayItem<T>> {
                for(let arr of list.values) {
                    for (let elem of arr) {
                        yield elem;
                    }
                }
            }
        }
    }

    get items(): IterableDynamicArray<T> {
        const list = this.#list;
        return {
            * [Symbol.iterator](): IteratorDynamicArray<T> {
                for(let arr of list.values) {
                    yield arr;
                }
            }
        }
    }

    splice(idx: number, countDelete: number, insertArray: Array<T> = []): void {
        const offset = insertArray.length - countDelete;
        const moveIdx = idx + countDelete
        if (offset !== 0) {
            this.moveElements(moveIdx, offset);
        }
        let curIdx = idx;
        for(let newItem of insertArray) {
            this.set(curIdx, newItem)
            curIdx++;
        }
    }

    protected addEmptyArray() {
        this.#list.add(new Array(this.capacityChunk));
    }

    protected moveElements(idxStart: number, offset: number) {
        if (offset === 0) {
            return;
        }
        if (offset > 0) {
            let prevLastIdx = this.#length - 1;
            this.addItemsByOffset(offset);
            this.#length = this.#length + offset;
            let idx = this.#length - 1;
            while (idx >= idxStart + offset) {
                const prev = this.get(prevLastIdx);
                if (prev) {
                    this.set(idx, prev)
                }
                idx--;
                prevLastIdx--;
            }
        } else {
            let idx = idxStart + offset > 0 ? idxStart + offset : 0;
            let realOffset = idxStart - idx;
            let prevLastIdx = idxStart;
            while (prevLastIdx < this.#length - 1) {
                const prev = this.get(prevLastIdx);
                if (prev) {
                    this.set(idx, prev)
                }
                idx++;
                prevLastIdx++;
            }
            for (let i = 0; i < realOffset; i++) {
                this.pop();
            }
        }
    }

    protected addItemsByOffset(offset: number): void {
        let rows = Math.ceil(this.#length / this.capacityChunk);
        const newRows = Math.ceil((this.#length + offset) / this.capacityChunk);
        while (rows < newRows) {
            this.addEmptyArray();
            rows++;
        }
    }

    protected verifyIndex(idx: number): void {
        if (idx < 0 || idx + 1 > this.#length) {
            throw new Error('Index not exists');
        }
    }
}