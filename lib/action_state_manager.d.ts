import { Observable } from "oop-observer";
export declare abstract class ActionStateManager<T> extends Observable<T> {
    protected state: T;
    constructor(state: T);
    protected changeState(state: T): T;
    getState(): T;
    notify(): void;
}
