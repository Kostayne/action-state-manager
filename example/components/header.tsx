import React from "react";
import { ThemeStoreComponentProps } from "../theme_store";
import { Themes } from "../styles";

export const Header = (props: ThemeStoreComponentProps) => {
    const store = props.store;

    const changeTheme = () => {
        const newTheme = store.getState().theme == Themes.black? Themes.white : Themes.black;
        store.changeTheme(newTheme);
    }

    const blackThemeV = (
        <div className="header" onClick={changeTheme}>
            <span className="header__text">Header</span>
        </div>
    );

    const lightThemeV = (
        <div className="header light" onClick={changeTheme}>
            <span className="header__text header__text">Header</span>
        </div>
    );

    return store.getState().theme == Themes.black? blackThemeV : lightThemeV;
};