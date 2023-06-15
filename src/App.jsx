import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Project from "./pages/Project";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import ProductsAdmin from "./pages/ProductsAdmin";
import Users from "./pages/Users";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<ProductsAdmin />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-this-project" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
