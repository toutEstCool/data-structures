export interface ISimpleQueue<T> {
    get head(): T | null;

    values(): IterableIterator<T>;
    push(value: T): void;
    shift(): T;
    isEmpty(): boolean;
}

export interface IDoubleQueue<T> extends ISimpleQueue<T>{
    get back(): T | null;

    pop(): T;
    unshift(value: T): void;
}