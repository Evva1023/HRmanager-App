import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./SingleEmployee.css";

export const SingleEmployee = () => {
    const [person, setPerson] = useState({});
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://hr-manager-test.onrender.com/person/${id}`);
            const data = await res.json();
            console.log(data);
            setPerson(data);
        })();
    }, [id]);

    return (
        <div className="container table-container">
        <h1 className="page-title">{person.name} {person.surname}</h1>
        <table>
            <tr>
                <th>Name</th>
                <td>{person.name}</td>
                <td rowSpan={6}>
                    <Link to="/add">
                    <button className="link table-link"
                            onClick={async () => {
                                console.log(person.id);
                                await fetch(`https://hr-manager-test.onrender.com/person/${person.id}`, {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(person)
                                });
                                setPerson({});
                    }}>
                        Update
                    </button>
                    </Link>

                    <Link to="/employeeList">
                    <button className="link table-link danger"
                            onClick={async () => {
                                console.log(person.id);
                                await fetch(`https://hr-manager-test.onrender.com/person/${person.id}`, {method: "DELETE"});
                                setPerson({});
                            }}>
                        Delete
                    </button>
                    </Link>
                </td>
            </tr>
            <tr>
                <th>Surname</th>
                <td>{person.surname}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{person.phone}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{person.email}</td>
            </tr>
            <tr>
                <th>PESEL</th>
                <td>{person.pesel}</td>
            </tr>
            <tr>
                <th><p className="wrap">Note</p></th>
                <td>{person.notes}</td>
            </tr>
        </table>
        <Link to="/employeeList" className="link btn-big flex-container">Back to list</Link>
        </div>
    );
};