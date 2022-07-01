import React from "react";
import {Header} from "../components/Header/Header";
import {PageNotFound} from "../components/PageNotFound/PageNotFound";

export const PageNotFoundView = () => {
    return (
        <>
        <Header text="Logout" to="/" />
        <PageNotFound />
        </>
    );
};