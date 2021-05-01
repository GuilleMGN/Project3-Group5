import React from "react";

function SignUp() {
    return (
        <div className="container">
            <span className="hide">{ document.title = "PurrChase Sign-Up" }</span>
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <form className="form-group">
                            <h1>Create an Account</h1>
                            <hr />
                            <label className="label">Enter your Email </label>
                            <input className="form-control" placeholder="Email"></input>
                            <label className="label">Create your Password </label>
                            <input className="form-control" placeholder="Password" type="password"></input>
                            <label className="label">Confirm Password </label>
                            <input className="form-control" placeholder="Confirm Password" type="password"></input>
                            <br />
                            <a className="btn btn-outline-danger" href="/">Return </a>
                            <a className="btn btn-outline-success" href="/home">Create Account </a>
                            <hr />
                            <h4>Already have an account? <br />
                                <a href="/login"> Login! </a>
                            </h4>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;