import React from "react";
import menuItemModel from "../../../Interfaces/menuItemModel";
import { NavLink } from "react-router-dom";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  return (
    <div className="col-md-3 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <NavLink to={`/menuitemdetails/${props.menuItem.id}`}>
              <img
                src="https://localhost:44329/images/testing.jpg"
                style={{ borderRadius: "50%" }}
                alt=""
                className="w-100 mt-5 image-box"
              />
            </NavLink>
          </div>

          <i
            className="bi bi-cart-plus btn btn-outline-danger"
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              padding: "5px 10px",
              borderRadius: "3px",
              outline: "none !important",
              cursor: "pointer",
            }}
          ></i>

          <div className="text-center">
            <p className="card-title m-0 text-success fs-3">
              <NavLink to={`/menuitemdetails/${props.menuItem.id}`}
              style={{textDecoration:"none"}}
              >
                {props.menuItem.productName}
              </NavLink>
            </p>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.menuItem.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "center" }}>
            {props.menuItem.description}
          </p>
          <div className="row text-center">
            <h4>${props.menuItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
