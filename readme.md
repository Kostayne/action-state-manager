# Action state manager
Action state manager - small package, that helps you manage state by actions.

## What's the problem
When you using redux, you have to write switch/case construction and pass args with type that fullfils all actions or even ***any***.

redux example:
``` ts
import createStore from "redux";

const SUMM_ACTION = "summ";
const SUBSTR_ACTION = "substr";

function testReducer(state: { val: number }, action: any) {
    switch(action.type) {
        case SUMM_ACTION: 
            return { val: state.val + action.payload };

        case SUBSTR_ACTION:
            return { val: state.val - action.payload };

        default: 
            return state;
    }
}

const store = createStore(testReducer);

store.dispatch({ type: SUMM_ACTION, payload: 2 });
store.dispatch({ type: SUBSTR_ACTION, payload: 1 });

console.log(store.getState());
```

## Solve
We can create a new store with concrete actions and state.

``` ts
import { ActionStateManager } from "action-state-manager"

type CounterState = {
    val: number;
}

class ValStore extends Store<CounterState> {
    summ(_val: number) {
        return this.changeState({ val: this.state.val + _val });
    }

    substr_(val: number) {
        return this.changeState({ val: this.state.val - _val });
    }
}

const store = new ValStore({ val: 0 });

store.summ(2);
store.substr(1);

console.log(store.getState()); // { val: 1 }
```

## Using with react
To rerender components when state changed use StateUpdater.

``` ts
import { StateUpdater } from "action-state-manager";

const TestC = () => {
    const [state, setState] = useState(null);
    let updater: StateUpdater<ThemeStoreState>;

    useEffect(() => {
        updater = new StateUpdater(setState);
        themeStore.subscribe(updater);

        return () => {
            // unsubscribe updater
            themeStore.unsubscribe(updater);
        }
    });
}
```