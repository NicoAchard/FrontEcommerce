import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <AdminSidebar />
      <div className="col d-flex flex-column p-0">
        <NavAdmin />
      </div>
    </div>
  </div>
);
