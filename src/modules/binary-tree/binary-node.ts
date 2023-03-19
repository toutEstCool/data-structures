import {BinaryNode as AbstractNode, NullableNode} from './interfaces';

export default class BinaryNode<T = unknown> implements AbstractNode<T>{
    left: NullableNode<T> = null;
    right: NullableNode<T> = null;
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    *values(): Generator<T> {
        yield this.value;
        if (this.left !== null) {
            yield* this.left.values();
        }
        if (this.right !== null) {
            yield* this.right.values();
        }
    }

    *symmetrical(): Generator<T> {
        if (this.left !== null) {
            yield* this.left.symmetrical();
        }
        yield this.value;
        if (this.right !== null) {
            yield* this.right.symmetrical();
        }
    }

    *reversed(): Generator<T> {
        if (this.left !== null) {
            yield* this.left.reversed();
        }
        if (this.right !== null) {
            yield* this.right.reversed();
        }
        yield this.value;
    }
}