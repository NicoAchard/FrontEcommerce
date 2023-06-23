import AdminOrdersList from "../components/AdminOrdersList";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <AdminSidebar />
      <div className="col d-flex flex-column p-0  offset-2">
        <NavAdmin />
        <div className="pt-4 ps-4">
          <h4>Orders</h4>
        </div>
        <AdminOrdersList />
      </div>
    </div>
  </div>
);
