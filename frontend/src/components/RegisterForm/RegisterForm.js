import React, {useState} from "react";
import {Link} from "react-router-dom";
import {PasswordInput} from "../PasswordInput/PasswordInput";
import "./RegisterForm.css";

export const RegisterForm = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const handleSubmit = e => e.preventDefault();

    return (
        <div className="container-small">
            <div className="inner">
                <h1 className="page-title">Register &#11183;</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username
                    <input type="text" autoFocus value={user} onChange={e => setUser(e.target.value)} />
                    </label>
                    <label>Password
                        <PasswordInput value={pwd} setPwd={e => setPwd(e.target.value)} />
                    </label>
                    <label>Confirm password
                        <PasswordInput value={confirmPwd} setPwd={e => setConfirmPwd(e.target.value)} />
                    </label>
                    {(user !== "" && pwd !== "" && pwd === confirmPwd) ? 
                    <Link className="link" to="/employeeList">Register</Link>
                    : <Link className="link disabled" to="/register">Register</Link>}
                </form>
            </div>
        </div>
    );
};