import { Observable, IObserver } from "oop-observer";

export abstract class ActionStateManager<T> extends Observable<T> {
    protected state: T;

    constructor(state: T) {
        super();
        this.state = state;
        this.getState = this.getState.bind(this);
    }

    protected changeState(state: T): T {
        this.state = state;
        this.notify();
        return this.state;
    }

    public getState(): T {
        return this.state;
    };

    public notify() {
        this.observers.forEach((observer: IObserver<T>) => {
            observer.update(this.state);
        })
    }
}