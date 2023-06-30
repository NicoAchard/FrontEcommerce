import AdminProductsList from "../components/AdminProductsList";
import ModalAddProduct from "../components/ModalAddProduct";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";

import { useState } from "react";

export default () => {
  const [show, setShow] = useState(false);

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
          <AdminProductsList />
          <ModalAddProduct show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};
