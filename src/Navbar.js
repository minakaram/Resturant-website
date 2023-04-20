import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style/nav.css"
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">
            Crispy kitchen
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="a"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Story"
                  className="a"
                  aria-current="page"
                  href="#"
                >
                  Story
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Menu"
                  className="a"
                  aria-current="page"
                  href="#"
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Update"
                  className="a"
                  aria-current="page"
                  href="#"
                >
                  Our Updates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="a"
                  aria-current="page"
                  href="#"
                >
                  Contact
                </NavLink>
              </li>
              <form className="d-flex">
                <button className="btn btn-outline-success" type="submit">
                  Resevation
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
