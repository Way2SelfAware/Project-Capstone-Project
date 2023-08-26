// react hooks
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// my components
import Navbar from "./components/navbar";
import User from "./pages/user";
import Cart from "./pages/cart";
import Shop from "./pages/shop";

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
          <Route path="/profile" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
