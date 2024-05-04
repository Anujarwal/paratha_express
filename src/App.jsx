import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Page/Menu";
import AboutUs from "./Page/AboutUs";
import Blog from "./Page/Blog";
import Login from "./Page/Login";
import Register from "./Page/Register";
import CardBadge from "./Components/CardBadge";
import CheckOut from "./Page/CheckOut";
import PageNotFound from "./Page/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/badge" element={<CardBadge />} />
        <Route path="/check" element={<CheckOut />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
