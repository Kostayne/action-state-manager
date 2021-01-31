import { IObserver } from "oop-observer";
export declare class StateUpdater<T> implements IObserver<T> {
    protected setState: (state: T) => void;
    constructor(setState: (state: T) => void);
    update(state: T): void;
}
