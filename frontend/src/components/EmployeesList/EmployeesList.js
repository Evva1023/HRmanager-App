import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Spinner} from "../Spinner/Spinner";
import "./EmployeesList.css";

export const EmployeesList = (props) => {
    const [list, setList] = useState(null);
    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/person");
            const data = await res.json();
            console.log(data);
            setList(data);
        })();
    },[]);

    if (list === null) {
        return <Spinner />;
    }
    
    return (
        <div className="container table-container">
        <h1 className="page-title">Employees</h1>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>PESEL</th>
                    <th>Note</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {list.map((person, index) => (
                    <tr key={person.id}>
                        <th>{index + 1}</th>
                        <td>{person.surname}</td>
                        <td>{person.name}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td>{person.pesel}</td>
                        <td><p className="wrap">{person.notes}</p></td>
                        <td className="list-link-container">
                            <a href={`/singleEmployee/${person.id}`} className="list-link">See details</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link to="/add" className="link btn-big flex-container">Add New</Link>
        </div>
    );
};