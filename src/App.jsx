import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Project from "./pages/Project";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import ProductsAdmin from "./pages/ProductsAdmin";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import StickyButton from "./components/StickyButton";
import Product from "./pages/Product";
import CartIcon from "./components/CartIcon";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

function App() {
  return (
    <>
      <Cart />
      <StickyButton />
      <CartIcon />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<ProductsAdmin />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/about-this-project" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
