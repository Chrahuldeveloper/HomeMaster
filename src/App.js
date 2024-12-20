import React from "react";
import "./App.css";
import {
  Service,
  Home,
  Cart,
  SubService,
  CheckOut,
  About,
  Contact,
  Explore,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Service />} path="/service/:id" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<SubService />} path="/subservice" />
        <Route element={<CheckOut />} path="/checkout" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Explore />} path="/explore" />
      </Routes>
    </div>
  );
}
