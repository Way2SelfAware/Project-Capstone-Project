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
  const [filters, setFilters] = useState({
    minRating: null,
    minPrice: null,
    maxPrice: null,
  });

  // sorting and filtering
  const sortProducts = (products, option) => {
    let sortedProducts = [...products];

    // filter options
    if (filters.minRating !== null) {
      sortedProducts = sortedProducts.filter(
        (product) => product.rating.rate >= filters.minRating
      );
    }
    if (filters.minPrice !== null) {
      sortedProducts = sortedProducts.filter(
        (product) => product.price >= filters.minPrice
      );
    }
    if (filters.maxPrice !== null) {
      sortedProducts = sortedProducts.filter(
        (product) => product.price >= filters.maxPrice
      );
    }

    // sort options
    if (option === "priceLowToHigh") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (option === "priceHighToLow") {
      return [...products].sort((a, b) => b.price - a.price);
    } else if (option === "rating") {
      return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    } else {
      return sortedProducts;
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
      <br />
      <div className="filter-sort-options">
        {/* sort options */}
        <div className="sorting-options">
          <h4 className="sort-options-heading">Sort by:</h4>
          {/* default */}
          <button onClick={() => setSortOption("default")}>Default</button>
          {/* price L-H */}
          <button onClick={() => setSortOption("priceLowToHigh")}>
            Price Low to High
          </button>
          {/* price H-L */}
          <button onClick={() => setSortOption("priceHighToLow")}>
            Price High to Low
          </button>
          {/* rating */}
          <button onClick={() => setSortOption("rating")}>Rating</button>
        </div>
        {/* filter options */}
        <div className="filter-options">
          <h4 className="filter-options-heading">Filter by:</h4>
          {/* filter by rating */}
          <label>
            Minimum Rating:
            <input
              type="number"
              value={filters.minRating === null ? "" : filters.minRating}
              onChange={(event) =>
                setFilters({
                  ...filters,
                  minRating:
                    event.target.value !== ""
                      ? parseInt(event.target.value)
                      : null,
                })
              }
            />
          </label>
        </div>
        {/* filter by min/max price */}
        <label>
          Min Price:
          <input
            type="number"
            value={filters.minPrice === null ? "" : filters.minPrice}
            onChange={(event) =>
              setFilters({
                ...filters,
                minPrice:
                  event.target.value !== ""
                    ? parseInt(event.target.value)
                    : null,
              })
            }
          />
        </label>
        {/* max price */}
        <label>
          Max Price:
          <input
            type="number"
            value={filters.maxPrice === null ? "" : filters.maxPrice}
            onChange={(event) =>
              setFilters({
                ...filters,
                maxPrice:
                  event.target.value !== ""
                    ? parseInt(event.target.value)
                    : null,
              })
            }
          />
        </label>
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
