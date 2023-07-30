import React from "react";
import "./NavBar.css";

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar nav-shape navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler nav-item-container"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center nav-item-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Best Sellers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gift Ideas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Releases
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="">
                  Todays Deal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customer Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
