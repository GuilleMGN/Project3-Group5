import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

function NotFound() {
  return (
    <div>
      <div id="main">
        <div className="fof">
          <h1>Error 404</h1> <br /> <hr />
        <Link to = "/" className="btn btn-outline-danger">Go Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
