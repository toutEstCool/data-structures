import {ILinkedListItem} from "../linked-list";
import {IDoubleQueue} from "./interfaces";
import {SimpleQueue} from "./index";

export default class DoubleQueue<T = unknown> extends SimpleQueue<T> implements IDoubleQueue<T> {
    constructor() {
        super();
    }

    get back(): T | null {
        return this.queue.last?.value ?? null;
    }

    unshift(value: T): void {
        if (this.isEmpty()) {
            this.queue.add(value);
        } else {
            this.queue.insertBefore(value, <ILinkedListItem<T>>this.queue.first);
        }
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const last = <ILinkedListItem<T>>this.queue.last;
        const val = last.value;
        this.queue.delete(last);
        return val;
    }
}