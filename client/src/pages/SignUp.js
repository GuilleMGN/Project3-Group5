import React from "react";

function SignUp() {
    return (
        <div>
            <h1>SignUp Page </h1>
            <h2>Enter a username and password: </h2>
            <input placeholder="username"></input>
            <input placeholder="password" type="password"></input>
            <a className="btn btn-outline-success" href="/home">Create Account</a>
            <h3>Already have an account? </h3>
            <a className="btn btn-outline-secondary" href="/login">LOGIN </a>
            <a className="btn btn-outline-danger" href="/">Go Back </a>
        </div>
    );
}

export default SignUp;