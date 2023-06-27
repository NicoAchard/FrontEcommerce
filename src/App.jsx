import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Project from "./pages/Project";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminUsers from "./pages/AdminUsers";
import AdminOrders from "./pages/AdminOrders";
import AdminCategories from "./pages/AdminCategories";
import Checkout from "./pages/Checkout";
import CartIcon from "./components/CartIcon";
import Cart from "./components/Cart";
import ThanksForOrder from "./pages/ThanksForOrder";
import StickyButton from "./components/StickyButton";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProtectedProfile from "./components/ProtectedProfile";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <CartIcon />
      <Cart />
      <StickyButton />
      <ScrollToTop />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<Product />} />

        <Route element={<ProtectedProfile />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thanks" element={<ThanksForOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/about-this-project" element={<Project />} />
        <Route path="*" element={<Error />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
