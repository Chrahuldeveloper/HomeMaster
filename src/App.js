import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);

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
