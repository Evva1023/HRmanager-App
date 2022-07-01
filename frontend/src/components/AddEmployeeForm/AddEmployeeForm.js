import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./AddEmployeeForm.css";

export const AddEmployeeForm = () => {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        pesel: "",
        notes: "",
    });
    let {name, surname, phone, email, pesel, notes} = form;

    const sendForm = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3001/person", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        console.log(data);
        setForm({
                name: "",
                surname: "",
                phone: "",
                email: "",
                pesel: "",
                notes: "",
        });
    };

    return (
        <>
            <h1 className="page-title">Add New Employee &#11183;</h1>
            <form className="flex-container add-form" onSubmit={sendForm}>
            <div className="container-small">
                <div className="inner">
                    <label>Name
                        <input type="text" value={name} 
                               onChange={e => setForm(form => ({...form, name: e.target.value}))}
                               required
                        />
                    </label>
                    <label>Surname
                        <input type="text" value={surname} 
                               onChange={e => setForm(form => ({...form, surname: e.target.value}))}
                               required
                        />
                    </label>
                    <label>Email
                        <input type="email" value={email} 
                               onChange={e => setForm(form => ({...form, email: e.target.value}))}
                               required
                        />
                    </label>
                    <label>Phone
                        <input type="text" value={phone} 
                               onChange={e => setForm(form => ({...form, phone: e.target.value}))}
                               required
                        />
                    </label>
                    <label>PESEL
                        <input type="text" value={pesel} 
                               onChange={e => setForm(form => ({...form, pesel: e.target.value}))}
                               required
                        />
                    </label>
                </div>
            </div>
            <div className="container-small">
                <div className="inner">
                     <label>Notes
                        <textarea value={notes}
                                  onChange={e => setForm(form => ({...form, notes: e.target.value}))} />
                    </label>
                    <button type="submit" className={"link"}>Add</button>
                </div>
            </div>
        </form>
        <Link to="/employeeList" className="link btn-big flex-container">Back to List</Link>
        </>
    );
};