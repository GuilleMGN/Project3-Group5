import React from "react";

function Login() {
    return (
        <div>
            <h1>Login Page </h1>
            <input placeholder="username"></input>
            <input placeholder="password" type="password"></input>
            <a className="btn btn-outline-success" href="/home">SIGN IN </a>
            <h2>Dont have an account? Sign up! </h2>
            <a className="btn btn-outline-secondary" href="/signup">SIGN UP </a>
            <a className="btn btn-outline-danger" href="/">Go Back </a>
        </div>
    );
}

export default Login;