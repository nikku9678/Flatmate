import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
