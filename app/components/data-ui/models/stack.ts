import { DataStructure } from "./data-structure";

export class Stack<T> extends DataStructure<T[]> {
    constructor(
        public values: T[],
    ) { super(); }

    push(value: T) {
        this.values.push(value);
        this.notify();
    }

    pop() {
        let result = this.values.pop();
        this.notify();
        return result;
    }

    clear() {
        this.values = [];
        this.notify();
    }

    get data() {
        return this.values;
    }
};
