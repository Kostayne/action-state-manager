import React from "react";
import { ThemeStoreComponentProps } from "../theme_store";
import { Themes } from "../styles";

export function Footer(props: ThemeStoreComponentProps) {
    const store = props.store;

    const lightV = (
        <div className="footer light">
            <span className="footer__text">Footer</span>
        </div>
    );

    if (store.getState().theme == Themes.white) return lightV;

    return (
        <div className="footer">
            <span className="footer__text">Footer</span>
        </div>
    );
};