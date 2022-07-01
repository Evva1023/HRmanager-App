import React from "react";
import {Header} from "../components/Header/Header";
import {RegisterForm} from "../components/RegisterForm/RegisterForm";

export const RegisterView = () => {
    return (
        <>
        <Header text="Login" to="/" />
        <RegisterForm />
        </>
    );
};