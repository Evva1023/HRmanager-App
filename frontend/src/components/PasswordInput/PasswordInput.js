import React, {useState} from "react";
import {BsEyeFill} from "react-icons/bs";
import "./PasswordInput.css";

export const PasswordInput = (props) => {
    const [pwdPreview, setPwdPreview] = useState(false);
    const togglePwdPreview = (e) => {
        e.preventDefault();
        !pwdPreview ? setPwdPreview(true) : setPwdPreview(false);
    };

    return (
        <div className="pwd-box">
            <input type={pwdPreview ? "text" : "password"} style={props.style} value={props.value} onChange={props.setPwd}/>
            <button className="pwd-toggler" onClick={togglePwdPreview}><BsEyeFill /></button>
        </div>
    );
};