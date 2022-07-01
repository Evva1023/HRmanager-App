import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";
 
export const Header = (props) => {
    return (
        <header className="flex-container">
            <div className="logo">
                <Link to="/"><h1>HR<span className="logo-small">manager</span></h1></Link>
            </div>
            <nav>
                <Link className="link" to={props.to}>{props.text}</Link>
                <Link className="link" to="/register">Register</Link>
            </nav>
        </header>
    );
};