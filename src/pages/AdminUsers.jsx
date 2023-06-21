import AdminSidebar from "../components/AdminSidebar";
import AdminUsersList from "../components/AdminUsersList";
import NavAdmin from "../components/NavAdmin";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <AdminSidebar />
      <div className="col d-flex flex-column p-0">
        <NavAdmin />
        <div className="pt-4 px-4 d-flex justify-content-between">
          <h4>Users</h4>
          <button className="btn btn-dark">Add users</button>
        </div>
        <AdminUsersList />
      </div>
    </div>
  </div>
);
