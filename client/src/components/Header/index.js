import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom"

function Header() {
  const activeStyle = {
    color: "#f1c232"
  }
  return (
    <>
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container align-middle">
          <NavLink activeStyle={activeStyle} className="navbar-brand" exact to="/">
            <h2 className="py-3"> PurrChase </h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink activeStyle={activeStyle} className="nav-link" exact to="/home">
                  {/* <i className="fa fa-home"></i> */}
                  <h5> Home </h5>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" to="/categories">
                  <h5>Categories</h5>
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" to="/profile">
                  <h5>Profile</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" to="/stats">
                  <h5>Stats</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" to="/add">
                  <h5>Add</h5>
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                <h5>Search</h5>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
