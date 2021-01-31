import React from "react";
import { ThemeStoreComponentProps } from "../theme_store";
import { Themes } from "../styles";

export function Content(props: ThemeStoreComponentProps) {
    const store = props.store;

    const lightV = (
        <div className="content light">
            <span className="content__text">Content</span>
        </div>
    );

    const darkV = (
        <div className="content">
            <span className="content__text">Content</span>
        </div>
    );

    if (store.getState().theme == Themes.black) return darkV;
    return lightV;
}