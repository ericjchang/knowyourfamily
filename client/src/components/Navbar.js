import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div /* style={{ position: "fixed", width: "100vw" }} */>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">
          <b>Famtree</b>
        </a>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#testimonies">
                Testimonies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#whatdoweoffer">
                What do we offer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#applyyourdata">
                Apply your data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#getintouch">
                Get in touch
              </a>
            </li>
          </ul>
          <ul
            className="navbar-nav"
            style={{ marginLeft: "2vh", marginRight: "2vh" }}
          >
            <li className="nav-item">
              <Link to="/register">
                <button className="btn btn-outline-warning">
                  Register Now
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <button className="btn btn-outline-success">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
