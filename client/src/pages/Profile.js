import React, { Component } from "react";
// import API from "../utils/API";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="display-4 center"> Your Profile</h1>
        <div className="row">
          <div className="col-lg-4">
            <img className="pfp" src="user.png" alt="."></img>
            <br />
            <h4><i className="far fa-user"></i> NAME</h4>
            <h4><i className="far fa-envelope"></i> EMAIL ADDRESS</h4>
            <h4><img src="./logo192.png" className="purrcoin" alt="." /> 500</h4>
            <br />
            <div className="center">
              <a className="btn btn-outline-danger sign-out" href="/">Sign out</a>
            </div>
          </div>
          <div className="col-lg-8">
            <h1 className="center">Posts</h1>
            <br />

            <div className="container">
              <div className="card h-100">
                <img src="./car.jpeg" className="card-img-top" alt="cars" />
                <div className="card-body">
                  <h5 className="card-title">Cars and Vehicles</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  } w
}

export default Profile;