//import React, { Component } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

const styles = {
  card: {
    color: "red",
  },
};

function SignUp() {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  // const onChange = e => {
  //   setState({ [e.target.id]: e.target.value });
  // };
  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
      password2: state.password2
    };
    API.register(newUser)
      .then(res => {
        //console.log(res)
        let errors = res.data.errors
        //console.log(errors)
        if (errors !== undefined) {
          setError(
            {
              name: errors.name,
              email: errors.email,
              password: errors.password,
              password2: errors.password2
            });
        } else {
          setError(
            {
              name: "",
              email: "",
              password: "",
              password2: "",
            });
          history.push('/login');
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="container" >
      <span className="hide">{document.title = "PurrChase Sign-Up"}</span>
      <div className="card">
        <div className="row">
          <div className="col-lg-12">
            <form noValidate onSubmit={onSubmit} className="form-group">
              <h1>Create an Account</h1>
              <hr />
              <label className="label">Display Name </label>
              <input
                className="form-control"
                placeholder="Full Name"
                onChange={(e) => setState({ ...state, name: e.target.value })}
                //value={state.name}
                //error={error.name}
                id="name"
                type="text"
              />
              <p style={styles.card}>{error.name}</p>
              <br />
              <label className="label">Email Address </label>
              <input
                className="form-control"
                placeholder="someone@example.com"
                onChange={(e) => setState({ ...state, email: e.target.value })}
                //value={state.email}
                //error={error.email}
                id="email"
                type="email"
              />
              <p style={styles.card}>{error.email}</p>
              <br />
              <label className="label">Create your Password </label>
              <input
                className="form-control"
                placeholder="Create Password"
                onChange={(e) => setState({ ...state, password: e.target.value })}
                //value={state.password}
                //error={error.password}
                id="password"
                type="password"
              />
              <p style={styles.card}>{error.password}</p>
              <br />
              <label className="label">Confirm Password </label>
              <input
                className="form-control"
                placeholder="Confirm Password"
                onChange={(e) => setState({ ...state, password2: e.target.value })}
                //value={state.password2}
                //error={error.password2}
                id="password2"
                type="password"
              />
              <p style={styles.card}>{error.password2}</p>
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

export default SignUp;