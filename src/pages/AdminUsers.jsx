import AdminSidebar from "../components/AdminSidebar";
import AdminUsersList from "../components/AdminUsersList";
import NavAdmin from "../components/NavAdmin";
import ModalAddUser from "../components/ModalAddUser";

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
            <h4>Users</h4>
            <button className="btn btn-dark" onClick={() => setShow(true)}>
              Add users
            </button>
          </div>
          <AdminUsersList />
          <ModalAddUser show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};
