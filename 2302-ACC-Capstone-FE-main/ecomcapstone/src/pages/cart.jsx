import React from "react";

const Cart = () => {
  return (
    <>
      <div className="cart-page">
        <h1>Cart</h1>
        <p>
          This will be used for the shopping cart. Functionally must include:
          <ol>
            <li>UI/UX</li>
            <li>Add to cart with persistence</li>
            <li>Change the quantity of a product in my cart. </li>
            <li>Remove a product from my cart.</li>
            <li>
              "Checkout" the items in my cart, i.e., purchase the products.
            </li>
          </ol>
        </p>
      </div>
    </>
  );
};

export default Cart;
