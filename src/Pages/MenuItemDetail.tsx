import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetMenuItemQuery } from "../Apis/menuItemApi";
import { setMenuItem } from "../Storage/Redux/menuItemSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../Apis/shoppingCartApi";

function MenuItemDetail() {
  const navigate = useNavigate();
  const { menuItemId } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuItemQuery(menuItemId);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  const handleQuantity = (value: number) => {
    if (quantity + value < 1) {
      return;
    }
    setQuantity(quantity + value);
  };

  const handleAddToCart = async (menuItemId: number) => {
    setIsAddingToCart(true);
    const response = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: "06b077d1-0a54-4aaa-ba00-dd75c7364d1b",
    });
    console.log(response);
    setIsAddingToCart(false);
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  return (
    <div className="container pt-4 pt-md-5">
      {!isLoading ? (
        <div className="row">
          <div className="col-7">
            <h2 className="text-success">{data.result?.productName}</h2>
            <span>
              <span
                className="badge text-bg-dark pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              >
                {data.result?.category}
              </span>
            </span>
            <span></span>
            <p style={{ fontSize: "20px" }} className="pt-2">
              {data.result?.description}
            </p>
            <span className="h3">${data.result?.price}</span> &nbsp;&nbsp;&nbsp;
            <span
              className="pb-2  p-3"
              style={{ border: "1px solid #333", borderRadius: "30px" }}
            >
              <i
                className="bi bi-dash p-1"
                style={{ fontSize: "25px", cursor: "pointer" }}
                onClick={() => handleQuantity(-1)}
              ></i>
              <span className="h3 mt-3 px-3">{quantity}</span>
              <i
                className="bi bi-plus p-1"
                style={{ fontSize: "25px", cursor: "pointer" }}
                onClick={() => handleQuantity(1)}
              ></i>
            </span>
            <div className="row pt-4">
              <div className="col-5">
                <button className="btn btn-success form-control"
                onClick={()=>handleAddToCart(data.result?.id)}>
                  Add to Cart
                </button>
              </div>

              <div className="col-5 ">
                <button
                  className="btn btn-secondary form-control"
                  onClick={() => navigate(-1)}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img
              src="https://via.placeholder.com/150"
              width="100%"
              style={{ borderRadius: "50%" }}
              alt="No content"
            ></img>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MenuItemDetail;
