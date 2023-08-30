//react hooks
import React from "react";
import { useState, useEffect } from "react";
// my components
import { getAllProducts } from "../API/apiEndpoints";

const AllProducts = () => {
  //state management
  const [allProducts, setAllProducts] = useState([]);

  // getAllProducts from API
  useEffect(() => {
    fetch(getAllProducts)
      .then((response) => {
        if (!response.ok) {
          console.error("Error fetching all products");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Product List</h1>
        {allProducts.map((product) => (
          <p key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            ></img>
            <br />
            {product.title}
            <br />
            {product.rating.rate}({product.rating.count})
            <br />${product.price}
          </p>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
