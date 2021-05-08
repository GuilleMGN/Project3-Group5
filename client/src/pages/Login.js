import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    API.login(userData).then(res => console.log(res));
    console.log(userData);

  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <span className="hide">{document.title = "PurrChase Login"}</span>
        <div className="card">
          <div className="row">
            <div className="col-lg-12">
              <form noValidate onSubmit={this.onSubmit} className="form-group">
                <h1>PurrChase Login</h1>
                <hr />
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
                <label className="label">Password </label>
                <input
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <br />
                <button className="btn btn-outline-info" type="submit">Login </button>
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
}

export default Login;