import React from "react";
import HomeLayout from "../components/HomeLayout/HomeLayout"

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1>
            <a className="navbar-brand" href=".">
              PurrCoin
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=".">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/."
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/.">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/.">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/.">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <HomeLayout/>
    </div>
  );
}

export default Home;
