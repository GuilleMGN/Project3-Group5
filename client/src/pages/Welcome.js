import React from "react";

function Welcome() {
    return (
        <div className="container">
            <span className="hide">{document.title = "Welcome to PurrChase"}</span>
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <hr />
                        <h1>Welcome to PurrChase! </h1>
                        <a className="btn btn-outline-success" href="/login">Login</a>
                        <br /> <br />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Slideshow</h2>

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <h3>Categories</h3>
                    <div className="col-lg-4 col-md-4 col-sm-12">

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>What we offer</h4>

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <h5>Recommended for you</h5>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;