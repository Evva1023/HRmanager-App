import React from "react";
import {Link} from "react-router-dom";
import "./PageNotFound.css";

export const PageNotFound = () => {
    return (
        <>
        <h1 className="page-title">Page not found, sorry</h1>
        <Link to="/" className="btn-big flex-container">Go back</Link>
        <div className="text-big">404</div>
        </>
    );
};