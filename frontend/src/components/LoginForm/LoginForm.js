import React, {useState} from "react";
import {Link} from "react-router-dom";
import {PasswordInput} from "../PasswordInput/PasswordInput";
import "./LoginForm.css";

export const LoginForm = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const userColor = user === "test" ? "#82cb29" : "#fff";
    const pwdColor = pwd === "test" ? "#82cb29" : "#fff";
    const handleSubmit = e => e.preventDefault();

    return (
        <div className="container-small">
            <div className="inner">
                <h1>Log in &#11183;</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username
                        <input type="text" 
                        style={{backgroundColor: `${userColor}`}} autoFocus placeholder="test" 
                        value={user} onChange={e => setUser(e.target.value)} />
                    </label>
                    <label>Password
                        <PasswordInput value={pwd} style={{backgroundColor: `${pwdColor}`}} setPwd={e => setPwd(e.target.value)} />
                    </label>
                    {(user !== "" && user === "test" && pwd !== "" && pwd === "test") ? 
                    <Link className="link" to="/employeeList">Login</Link>
                    : <Link className="link disabled" to="/">Login</Link>}
                </form>
            </div>
        </div>
    );
    }