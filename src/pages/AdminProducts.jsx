import AdminProductsList from "../components/AdminProductsList";
import ModalAddProduct from "../components/ModalAddProduct";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState(null);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const addProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    };
    addProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col d-flex flex-column p-0  offset-2">
          <NavAdmin />
          <div className="pt-4 px-4 d-flex justify-content-between">
            <h4>Products</h4>
            <button onClick={() => setShow(true)} className="btn btn-dark">
              Add products
            </button>
          </div>
          <AdminProductsList products={products} setProducts={setProducts} />
          <ModalAddProduct show={show} setShow={setShow} setProducts={setProducts} />
        </div>
      </div>
    </div>
  );
};
