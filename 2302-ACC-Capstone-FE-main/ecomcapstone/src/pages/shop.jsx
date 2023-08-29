// react hooks
import React from "react";
// my components
import AllProducts from "../components/allProducts";

const Shop = () => {
  return (
    <>
      <div className="shop-page">
        <div className="products">
          <AllProducts />
        </div>
      </div>
    </>
  );
};

export default Shop;
