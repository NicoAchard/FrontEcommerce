import AdminCategoriesList from "../components/AdminCategoriesList";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <AdminSidebar />
      <div className="col d-flex flex-column p-0">
        <NavAdmin />
        <div className="pt-4 px-4 d-flex justify-content-between">
          <h4>Categories</h4>
          <button className="btn btn-dark">Add</button>
        </div>
        <AdminCategoriesList />
      </div>
    </div>
  </div>
);
