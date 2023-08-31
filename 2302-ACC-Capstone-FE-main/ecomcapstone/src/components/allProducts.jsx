//react hooks
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// my components
import { getAllProducts } from "../API/apiEndpoints";
import "./allProducts.css";

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
      <div className="shop-title">
        <h1>Scamazon</h1>
      </div>
      <div className="products">
        {allProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="product" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              ></img>
              <p className="description">
                <br />
                <b>{product.title}</b>
                <br />
                {product.rating.rate}({product.rating.count})
                <br />${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
