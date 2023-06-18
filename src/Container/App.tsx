import React, { useEffect, useState } from "react";
import { Footer, Header } from "../Components/Layout/Index";
import { menuItemModel } from "../Interfaces/Index";
import { Home, Login, MenuItemDetail, NotFound, Register, ShoppingCart } from "../Pages";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";

function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery(
    "06b077d1-0a54-4aaa-ba00-dd75c7364d1b"
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuitemdetails/:menuItemId"
            element={<MenuItemDetail />}
          ></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
