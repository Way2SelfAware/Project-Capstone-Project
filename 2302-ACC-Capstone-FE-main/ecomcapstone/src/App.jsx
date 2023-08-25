// react hooks
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// my components
import Navbar from "./components/navbar";
import Profile from "./pages/profile";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import Register from "./components/register";
import Login from "./components/login";
// app
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="main-section">
        {/* NavBar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route path="/" element={<Shop />} />
          {/* Shopping Cart */}
          <Route path="/cart" element={<Cart />} />
          {/* profile */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
