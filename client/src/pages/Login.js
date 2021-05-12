//import React, { Component } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

const styles = {
  card: {
   
    color: "red",
    
  },

};


function Login(props) {
 
  var changed = props.setlogin
  const history = useHistory();
    const [state, setState] = useState({
      email: "",
      password: "",
    });

    const [error, setError] = useState({
      email: "",
      password: "",
    });
  
  // onChange = e => {
  //   this.setState({ [e.target.id]: e.target.value });
  // };
  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password
    };
    API.login(userData)
    .then(res => {
       console.log(res)
      let errors = res.data.errors
      console.log(errors)
      if(errors !== undefined)
      { setError(
        {
          email:errors.email,
          password:errors.password,
        });
        

      }else{
        setError(
          {
          email: "",
          password: "",
          
          });
          changed(res.data.user);
        history.push('/home');
      }
    })
    .catch(err => console.log(err));

  };

    return (
      <div className="container">
        <span className="hide">{document.title = "PurrChase Login"}</span>
        <div className="card">
          <div className="row">
            <div className="col-lg-12">
              <form noValidate onSubmit={onSubmit} className="form-group">
                <h1>PurrChase Login</h1>
                <hr />
                <label className="label">Email Address </label>
                <input
                  className="form-control"
                  placeholder="someone@example.com"
                  onChange={(e) => setState({...state,email:e.target.value})}
                  //value={this.state.email}
                  //error={errors.email}
                  id="email"
                  type="email"
                />
                <p style={styles.card}>{error.email}</p>
                <br />
                <label className="label">Password </label>
                <input
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={(e) => setState({...state,password:e.target.value})}
                  //value={this.state.password}
                  //error={errors.password}
                  id="password"
                  type="password"
                />
                <p style={styles.card}>{error.password}</p>
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

export default Login;