import React from "react";
import SideImage from "../components/SideImage/SideImage";
import './LoginPage.css';
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-form-container">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage