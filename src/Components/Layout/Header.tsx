import React from "react";
import { NavLink } from "react-router-dom";

let logo = require("../../Assets/Images/confirmed.png");

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark">
      <div className="container-fluid">
        <img src={logo} style={{ height: "40px" }} className="m-1" />
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/shoppingcart"
              >
                <i className="bi bi-cart"></i> View Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/shoppingcart"
              >
                <i className="bi bi-bag-heart-fill"></i> My Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/shoppingcart"
              >
                <i className="bi bi-question-circle-fill"></i> Help
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-workspace"></i> Admin Panel
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item"></li>
            <div className="d-flex" style={{marginLeft:"auto"}}>
              <li className="nav-item pt-1">
                <button
                  className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                  style={{
                    border: "none",
                    height: "40px",
                    width: "100px",
                  }}
                >
                  Logout
                </button>
              </li>
              <li className="nav-item text-white">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/Register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item text-white">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/Login"
              >
                Login
              </NavLink>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
