// react hooks
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
//my imports
import { getSingleProduct } from "../API/apiEndpoints";
import "./productDetails.css";

const ProductDetails = () => {
  // hook management
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // single product fetch
  useEffect(() => {
    fetch(`${getSingleProduct}/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.error("Error fetching product details: " + response);
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details: " + error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // ADD TO CART FUNCTIONALITY!!!!

  return (
    // display product details
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title}></img>
      <p className="product-rating">
        {product.rating.rate}({product.rating.count})
      </p>
      <p className="product-description">{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
      {/* return to shop link */}
      <Link to="/">Back to Shop</Link>
    </div>
  );
};

export default ProductDetails;
