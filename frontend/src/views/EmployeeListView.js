import React from "react";
import {EmployeesList} from "../components/EmployeesList/EmployeesList";
import {Header} from "../components/Header/Header";

export const EmployeeListView = () => {
    return (
        <>
        <Header text="Logout" to="/" />
        <EmployeesList />
        </>
    );
};