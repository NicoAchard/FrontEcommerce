import AdminCategoriesList from "../components/AdminCategoriesList";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";
import ModalAddCategory from "../components/ModalAddCategory";

import { useState } from "react";

export default () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col d-flex flex-column p-0">
          <NavAdmin />
          <div className="pt-4 px-4 d-flex justify-content-between">
            <h4>Categories</h4>
            <button className="btn btn-dark" onClick={() => setShow(true)}>
              Add
            </button>
          </div>
          <AdminCategoriesList />
          <ModalAddCategory show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};
