export interface LimitedStack<T> {
    readonly limit: number;
    get head(): T | null;
    get count(): number;

    values(): IterableIterator<T>;
    push(value: T): void;
    take(): T;
}