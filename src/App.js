import React from "react";
import "./App.css";
import { Service, Home, Cart } from "./pages/index";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Service />} path="/service/:id" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
    </div>
  );
}
