export interface BinaryNode<T> {
    value: T;
    left: NullableNode<T>;
    right: NullableNode<T>;
    values(): Generator<T>;
    symmetrical(): Generator<T>;
    reversed(): Generator<T>;
}

export type NullableNode<T> = BinaryNode<T> | null

export interface BinaryTree<T> {
    insert(value: T): void;
    has(value: T): boolean;
    min(): T | null;
    max(): T | null;
    delete(value: T): boolean;
    values(): IterableIterator<T>;
    symmetricalValues(): IterableIterator<T>;
    reversedValues(): IterableIterator<T>;
    widthValues(): IterableIterator<T>;
}