import { IObserver } from "oop-observer";

export class StateUpdater<T> implements IObserver<T> {
    protected setState: (state: T) => void;

    constructor(setState: (state: T) => void) {
        this.setState = setState;
    }

    update(state: T) {
        this.setState(state);
    }
}