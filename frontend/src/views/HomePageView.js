import React from "react";
import {Link} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Time} from "../components/Time/Time";
import {LoginForm} from "../components/LoginForm/LoginForm";

export const HomePageView = () => {
    return (
        <>
        <Header text="Login" to="/" />
        <div className="flex-container">
            <Time />
            <LoginForm />
        </div>
        <Link to="/taskList" className="link btn-big flex-container">Task List</Link>
        </>
    );
};