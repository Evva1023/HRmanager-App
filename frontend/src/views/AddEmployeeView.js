import React from "react";
import {Header} from "../components/Header/Header";
import {AddEmployeeForm} from "../components/AddEmployeeForm/AddEmployeeForm";

export const AddEmployeeView = () => {
    return (
        <>
        <Header text="Logout" to="/" />
        <AddEmployeeForm />
        </>
    );
};