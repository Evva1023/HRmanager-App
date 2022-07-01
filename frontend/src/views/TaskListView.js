import React from "react";
import {Header} from "../components/Header/Header";
import {TaskList} from "../components/TaskList/TaskList";

export const TaskListView = () => {
    return (
        <>
        <Header text="Logout" to="/" />
        <TaskList />
        </>
    )
};