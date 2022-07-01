import React from "react";
import "./ThemeToggler.css";

export const ThemeToggler = (props) => {
    return (
        <div className="theme-toggler">
             <button className="theme-toggler-btn" onClick={props.changeTheme}>{props.icon}</button>
        </div>
    );
};