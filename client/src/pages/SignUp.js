import React, { Component } from "react";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container" >
                <span className="hide">{document.title = "PurrChase Sign-Up"}</span>
                <div className="card">
                    <div className="row">
                        <div className="col-lg-12">
                            <form noValidate onSubmit={this.onSubmit} className="form-group">
                                <h1>Create an Account</h1>
                                <hr />
                                <label className="label">Display Name </label>
                                <input
                                    className="form-control"
                                    placeholder="Full Name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                />
                                <br />
                                <label className="label">Email Address </label>
                                <input
                                    className="form-control"
                                    placeholder="someone@example.com"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                />
                                <br />
                                <label className="label">Create your Password </label>
                                <input
                                    className="form-control"
                                    placeholder="Create Password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <br />
                                <label className="label">Confirm Password </label>
                                <input
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password" 
                                />
                                <br />
                                <button className="btn btn-outline-info" type="submit">Create Account </button>
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
}

export default SignUp;