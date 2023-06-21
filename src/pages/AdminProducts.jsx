import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";
import AdminProductsList from "../components/AdminProductsList";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <AdminSidebar />
      <div className="col d-flex flex-column p-0">
        <NavAdmin />
        <div className="pt-4 px-4 d-flex justify-content-between">
          <h4>Products</h4>
          <button className="btn btn-dark">Add products</button>
        </div>
        <AdminProductsList />
      </div>
    </div>
  </div>
);
