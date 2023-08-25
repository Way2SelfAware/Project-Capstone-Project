import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="main-section">
        <Router>
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
        </Router>
      </div>
    </>
  );
}

export default App;
