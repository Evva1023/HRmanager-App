import React, {useEffect, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import "./TaskList.css";

export const TaskList = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState({title: "", deadline: "", isCompleted: false});

    const handleTitleChange = (e) => {
        setTask({...task, title: e.target.value});
    };
    const handleDateChange = (e) => {
        setTask({...task, deadline: e.target.value});
    };
    
    const sendForm = async (e) => {
        e.preventDefault();
        const res = await fetch("https://hr-manager-test.onrender.com/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        });
        await res.json();
        setTask({title: "", deadline: "", isCompleted: false});
    };

    useEffect(() => {
        (async () => {
            const res = await fetch("https://hr-manager-test.onrender.com/task");
            const data = await res.json();
            setTaskList(data);
        })();
    },[taskList]);
    if (taskList === null) {
        return <Spinner />;
    }
    
    return (
        <>
        <h1 className="page-title">Your Tasks For Today</h1>
        <div className="flex-container">
            <div className="container-small">
                <div className="inner">
                <ul className="task-list">
                    {taskList.map((task, index) => (
                    <li key={task.id} className="task-list-item">
                        {index + 1}. {task.title}
                        <span className="task-date">{task.deadline}</span>
                        <button className="delete-btn" 
                            onClick={() => {
                                console.log(task.id);
                                const res = fetch(`https://hr-manager-test.onrender.com/task/${task.id}`, {method: "DELETE"});
                                console.log(res.status);
                            }}>
                            Delete
                            </button>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            <div className="container-small">
                <div className="inner">
                    <form onSubmit={sendForm}>
                        <label>Add new task
                            <input type="text" 
                                   value={task.title}
                                   onChange={handleTitleChange} 
                                   required />
                        </label>
                        <label>Deadline
                            <input type="date" 
                                   value={task.deadline}
                                   onChange={handleDateChange}
                                   />
                        </label>
                        <button className="link">Add</button>
                    </form>
                </div>
            </div>
            
        </div>
        </>
    );
};