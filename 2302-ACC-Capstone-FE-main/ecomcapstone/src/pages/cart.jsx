// react hooks
import React from "react";
import { useState } from "react";
// my components

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // add items to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // remove items from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id === productId);
    setCartItems(updatedCart);
  };

  // update quantity of item in cart
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // calculate total price of cart
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
