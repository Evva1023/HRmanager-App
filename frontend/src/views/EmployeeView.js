import React from "react";
import {Header} from "../components/Header/Header";
import {SingleEmployee} from "../components/SingleEmployee/SingleEmployee";

export const EmployeeView = () => {
    return (
        <>
        <Header text="Logout" to="/" />
        <SingleEmployee />
        </>
    );
};