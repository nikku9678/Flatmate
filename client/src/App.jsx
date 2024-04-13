import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/product/ProductList";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/product" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
