import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="main-section">
      <Routes></Routes>
    </div>
  );
}

export default App;
