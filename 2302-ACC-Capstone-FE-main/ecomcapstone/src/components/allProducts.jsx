//react hooks
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// my components
import { getAllProducts } from "../API/apiEndpoints";
import "./allProducts.css";

const AllProducts = () => {
  // state management
  const [allProducts, setAllProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  // sort options
  const sortProducts = (products, option) => {
    if (option === "priceLowToHigh") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (option === "priceHighToLow") {
      return [...products].sort((a, b) => b.price - a.price);
    } else if (option === "rating") {
      return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    } else {
      return products;
    }
  };

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
        setAllProducts(data);
      });
  }, []);

  // sort products
  const sortedProducts = sortProducts(allProducts, sortOption);

  return (
    <>
      <div className="shop-title">
        <h1>Scamazon</h1>
      </div>
      <div className="sorting-options">
        <button onClick={() => setSortOption("default")}>Default</button>
        <button onClick={() => setSortOption("priceLowToHigh")}>
          Price Low to High
        </button>
        <button onClick={() => setSortOption("priceHighToLow")}>
          Price High to Low
        </button>
        <button onClick={() => setSortOption("rating")}>Rating</button>
      </div>
      <div className="products">
        {sortedProducts.map((product) => (
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
                <br />
                <button className="add-to-cart-button">Add to Cart</button>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
