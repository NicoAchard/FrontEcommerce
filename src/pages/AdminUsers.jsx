import AdminUsersList from "../components/AdminUsersList";
import ModalAddUser from "../components/ModalAddUser";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";

import { useState } from "react";

export default () => {
  const [showAdduser, setShowAdduser] = useState(false);
  const [users, setUsers] = useState(null);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col d-flex flex-column p-0  offset-2">
          <NavAdmin />
          <div className="col pt-4 px-4 d-flex justify-content-between">
            <h4>Users</h4>
            <button className="btn btn-dark" onClick={() => setShowAdduser(true)}>
              Add users
            </button>
          </div>
          <AdminUsersList setUsers={setUsers} users={users} />
          <ModalAddUser show={showAdduser} setShow={setShowAdduser} setUsers={setUsers} />
        </div>
      </div>
    </div>
  );
};
