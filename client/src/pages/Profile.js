import React from "react";

function Profile() {
  return (
    <div className="container">
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-primary"
          style={{ color: "black" }}
        >
          <div className="container">
            <a className="navbar-brand" href="." id="logo">
              PurrChase
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <hr></hr>
        <div className="row">
          <div className="col-4">
            <img
              src="https://c0.klipartz.com/pngpicture/168/827/gratis-png-ilustracion-de-icono-femenino-iconos-de-computadora-perfil-de-usuario-avatar-perfil-transparente-thumbnail.png"
              alt="."
            ></img>
          </div>{" "}
          <div class="card" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title">
                <em>Profile Name</em>
              </h5>
              <h5 class="card-title">
                <em>MemberShip</em>
              </h5>
              <h5 class="card-title">
                <em>Location</em>
              </h5>
              <h5 class="card-title">
                <em>Details</em>
              </h5>
              <h5 class="card-title">
                <em>Rating</em>
              </h5>
              <h5 class="card-title">
                <em>Coins</em>
              </h5>
              {/* <h6 class="card-subtitle mb-2 text-muted">Details</h6> */}
              <p class="card-text">
                I am director of brand marketing, with experience managing
                global teams and multi-million-dollar.
                {/* campaigns.  */}
                {/* My background is brand strategy, visual design, and */}
                {/* account management inform her mindful but competitive approach. */}
              </p>
              <a href="/login" class="card-link">
                Login
              </a>
              <a href="/signup" class="card-link">
                Signup
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br></br>
        <h3>
          <em>My Rating</em>
        </h3>
        <div class="jumbotron jumbotron-fluid jumbo">
          <div class="container">
            <h1 class="display-4">View Ratings </h1>
            <p class="lead">
              Prepare to be your own boss and manage your own portfolio with{" "}
              <strong>
                <em>PurrChase.</em>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;