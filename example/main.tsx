import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { StateUpdater } from "../src/state_updater";
import { themeStore, ThemeStoreState, themeStoreContext, ThemeStore } from "./theme_store";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import "./main.scss";

function App() {
    const [state, setState] = useState(null);
    let updater: StateUpdater<ThemeStoreState>;

    useEffect(() => {
        updater = new StateUpdater(setState);
        themeStore.subscribe(updater);

        return () => {
            themeStore.unsubscribe(updater);
        }
    })

    return (
        (
            <div className="app">
                <themeStoreContext.Provider value={themeStore}>
                    <themeStoreContext.Consumer>
                        {(store: ThemeStore) => (
                            <>
                                <Header store={store}></Header>
                                <Content store={store}></Content>
                                <Footer store={store}></Footer>
                            </>
                        )}
                    </themeStoreContext.Consumer>
                </themeStoreContext.Provider>
            </div>
        )
    );
}

const appRoot = document.getElementById("app-root");
ReactDOM.render(<App />, appRoot);