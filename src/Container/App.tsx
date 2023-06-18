import React, { useEffect, useState } from "react";
import { Footer, Header } from "../Components/Layout/Index";
import { menuItemModel } from "../Interfaces/Index";
import { Home, MenuItemDetail, NotFound } from "../Pages";
import { Route, Routes } from "react-router-dom";

function App() {
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
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
