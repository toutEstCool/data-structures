export type ArrayItem<T> = T | undefined;
export type ListItem<T> = Array<ArrayItem<T>>;
export type IterableDynamicArray<T> = Iterable<ListItem<T>>
export type IteratorDynamicArray<T> = Iterator<ListItem<T>>

export interface DynamicArray<T> {
    get length(): number;
    get isEmpty(): boolean;
    get values(): Iterable<ArrayItem<T>>;

    get(idx: number): ArrayItem<T>;
    set(idx: number, value: T): void;
    push(value: T): void;
    pop(): ArrayItem<T>;
    unshift(value: T): void;
    shift(): ArrayItem<T>;
    splice(idx: number, countDelete: number, insertArray: Array<T>): void;
}