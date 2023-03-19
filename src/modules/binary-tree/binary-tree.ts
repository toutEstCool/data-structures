import {BinaryTree as Tree, NullableNode} from './interfaces';
import BinaryNode from './binary-node'
import {SimpleQueue} from '../queue'

export default class BinaryTree<T = number> implements Tree<T>{
    #root: NullableNode<T>= null;

    constructor(innerArray: Array<T> = []) {
        innerArray.forEach(val => this.insert(val))
    }

    insert(value: T): void {
        if (this.#root === null) {
            this.#root = new BinaryNode<T>(value);
        } else {
            let current: NullableNode<T> = this.#root;
            while (true) {
                let parent = current;
                if (current.value > value) {
                    current = current.left;
                    if (current === null) {
                        parent.left = new BinaryNode<T>(value);
                        return;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = new BinaryNode<T>(value);
                        return;
                    }
                }
            }
        }
    }

    has(value: T): boolean {
        if (this.#root === null) {
            return false;
        }
        let current: NullableNode<T> = this.#root;
        while (current.value !== value) {
            current = current.value > value ? current.left : current.right;
            if (current === null) {
                return false;
            }
        }
        return true;
    }

    min(): T | null {
        if (this.#root === null) {
            return null;
        }
        let current: NullableNode<T> = this.#root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    max(): T | null {
        if (this.#root === null) {
            return null;
        }
        let current: NullableNode<T> = this.#root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

    delete(value: T): boolean {
        if (this.#root === null) {
            return false;
        }
        let parent = null;
        let current: NullableNode<T> = this.#root;
        while (current.value !== value) {
            parent = current;
            current = current.value > value ? current.left : current.right;
            if (current === null) {
                return false;
            }
        }
        if (parent === null) {
            this.#root = null;
            return true;
        }
        return this.deleteNode(parent, current);
    }

    protected deleteNode(parent: BinaryNode<T>, node: BinaryNode<T>): boolean {
        if (node.left === null && node.right === null) {
            if (parent.left === node) {
                parent.left = null;
            }
            if (parent.right === node) {
                parent.right = null;
            }
            return true;
        }
        if ((node.left === null || node.right === null) && (node.left !== null || node.right !== null)) {
            if (parent.left === node) {
                parent.left = node.left ?? node.right;
            }
            if (parent.right === node) {
                parent.left = node.left ?? node.right;
            }
            return true;
        }
        if (node.left !== null && node.right !== null) {
            let current = node.right;
            let successor = current;
            let parentSuccessor = node;

            if (current.left === null) {
                if (parent.left === node) {
                    parent.left = successor;
                }
                if (parent.right === node) {
                    parent.right = successor;
                }
                successor.left = node.left;
                return true;
            }

            while (successor.left !== null) {
                parentSuccessor = successor;
                successor = successor.left;
            }

            parentSuccessor.left = successor.right === null ? null : successor.right;
            node.value = successor.value;
            return true;

        }
        return false;
    }

    protected intoIter(generator: Generator<T> | null): IterableIterator<T> {
        return {
            [Symbol.iterator](): IterableIterator<T> {
                return this;
            },
            next(...args): IteratorResult<T, T | null> {
                if (generator !== null) {
                    const val = generator.next();
                    if (!val.done) {
                        return {
                            done: false,
                            value: val.value
                        }
                    } else {
                        return {
                            done: true,
                            value: null
                        }
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }
    }

    values(): IterableIterator<T> {
        const generator = this.#root === null ? null : this.#root.values();
        return this.intoIter(generator);
    }

    symmetricalValues(): IterableIterator<T> {
        const generator = this.#root === null ? null : this.#root.symmetrical();
        return this.intoIter(generator);
    }

    reversedValues(): IterableIterator<T> {
        const generator = this.#root === null ? null : this.#root.reversed();
        return this.intoIter(generator);
    }

    widthValues(): IterableIterator<T> {
        return this.intoIter(this.widthGenerator());
    }

    protected *widthGenerator(): Generator<T> {
        if (this.#root !== null) {
            const queue = new SimpleQueue<BinaryNode<T>>();
            queue.push(this.#root);
            while (true) {
                let item = queue.shift();

                yield item.value;

                if (item.left !== null) {
                    queue.push(item.left);
                }

                if (item.right !== null) {
                    queue.push(item.right);
                }

                if (queue.isEmpty()) {
                    break;
                }
            }
        }
    }
}