import {LimitedStack as Stack} from './interfaces';

export default class LimitedStack<T = unknown> implements Stack<T> {
    readonly #stack: Array<T>;
    #current: number = -1;
    readonly limit: number;

    constructor(limit: number) {
        this.limit = limit;
        this.#stack = new Array<T>(limit);
    }

    get head(): T | null {
        return this.isEmpty() ? null : this.#stack[this.#current];
    }

    get count(): number {
        return this.#current + 1;
    }

    push(value: T): void {
        if (this.#current + 1 >= this.limit) {
            throw new Error('Stack overflow');
        }
        this.#current++;
        this.#stack[this.#current] = value;
    }

    take(): T {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        const val = this.#stack[this.#current];
        delete this.#stack[this.#current];
        this.#current--;
        return val;
    }

    isEmpty() {
        return this.#current < 0;
    }

    values(): IterableIterator<T> {
        const self = this;

        function *generate() {
            for(let i = 0; i <= self.#current; i++) {
                yield self.#stack[i];
            }
        }

        const iter = generate();

        return {
            [Symbol.iterator](): IterableIterator<T> {
                return this;
            },
            next(): IteratorResult<T> {
                return iter.next();
            }
        }
    }
}