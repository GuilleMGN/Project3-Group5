import React from "react";

function Welcome() {
    return (
        <div>
            <h1>Welcome Page</h1>
            <a className="btn btn-outline-success" href="/login">LOGIN</a>
            <a className="btn btn-outline-secondary" href="/signup">SIGN UP</a>
            <h2>Slideshow</h2>
            <h3>Categories</h3>
            <h4>What we offer</h4>
            <h5>Recommended for you</h5>
        </div>
    );
}

export default Welcome;