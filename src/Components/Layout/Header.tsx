import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { emptyUserState, setLoggedInUser } from "../../Storage/Redux/userAuthSlice";
import { RootState } from "../../Storage/Redux/store";
import { cartItemModel, userModel } from "../../Interfaces/Index";

let logo = require("../../Assets/Images/confirmed.png");

export default function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser({ ...emptyUserState }));
    navigate("/");
  };

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
                to="/NotFound"
              >
                <i className="bi bi-bag-heart-fill"></i> My Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/NotFound"
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

            {userData.id && (
                  <>
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        style={{
                          cursor: "pointer",
                          background: "transparent",
                          border: 0,
                        }}
                      >
                        Welcome, {userData.email}!
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                        style={{
                          border: "none",
                          height: "40px",
                          width: "100px",
                        }}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
             
              {!userData.id && (
                  <>
                    <li className="nav-item text-white">
                      <NavLink className="nav-link" to="/register">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item text-white">
                      <NavLink
                        className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                        style={{
                          border: "none",
                          height: "40px",
                          width: "100px",
                        }}
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
