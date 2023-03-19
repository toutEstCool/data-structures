import {ILinkedListItem, ListItemOrNull} from "./interfaces";

export default class LinkedListItem<T> implements ILinkedListItem<T> {
    value: T;
    #next: ListItemOrNull<T> = null;
    #prev: ListItemOrNull<T> = null;

    constructor(value: T) {
        this.value = value
    }

    get next(): ListItemOrNull<T> {
        return this.#next;
    }

    get prev(): ListItemOrNull<T> {
        return this.#prev;
    }

    setNext(item: ListItemOrNull<T>): void {
        this.#next = item;
    }

    setPrev(item: ListItemOrNull<T>): void {
        this.#prev = item;
    }
}