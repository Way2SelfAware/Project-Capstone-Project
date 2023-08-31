// react hooks
import React from "react";
// my components
import AllProducts from "../components/allProducts";
import "./shopstyle.css";

const Shop = () => {
  return (
    <>
      <div className="shop-page">
          <AllProducts />
      </div>
    </>
  );
};

export default Shop;
