import React from "react";

function Login() {
    return (
        <div className="container">
            <span className="hide">{ document.title = "PurrChase Login" }</span>
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <form className="form-group">
                            <h1>PurrChase Login</h1>
                            <hr />
                            <label className="label">Username </label>
                            <input className="form-control" placeholder="Your Username"></input>
                            <label className="label">Password </label>
                            <input className="form-control" placeholder="Your Password" type="password"></input>
                            <br />
                            <a className="btn btn-outline-danger" href="/">Return </a>
                            <a className="btn btn-outline-success" href="/home">Login </a>
                            <hr />
                            <h4>Don't have an account? <br />
                                <a href="/signup"> Sign up! </a>
                            </h4>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;