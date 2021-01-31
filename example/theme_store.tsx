import { ActionStateManager } from "../src/action_state_manager";
import { Themes } from "./styles";
import { createContext } from "react";

export interface ThemeStoreState {
    theme: Themes;
}

export interface ThemeStoreComponentProps {
    store: ThemeStore;
}

export class ThemeStore extends ActionStateManager<ThemeStoreState> {
    constructor(state: ThemeStoreState) {
        super(state);
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme(theme: Themes): ThemeStoreState {
        this.state = { theme };
        this.notify();
        return this.state;
    }
}

export const themeStore = new ThemeStore({ theme: Themes.white });
export const themeStoreContext = createContext(themeStore);