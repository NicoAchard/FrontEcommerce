import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";
import DashboardCard from "../components/DashboardCard";
import DashboardPopular from "../components/DashboardPopular";
import DashboardUsers from "../components/DashboardUsers";
import "./Dashboard.css";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <AdminSidebar />
      <div className="col d-flex flex-column p-0">
        <NavAdmin />
        <div className="dashboard-space ">
          <div classname="d-flex">
            <div className="d-flex px-1">
              <div className="d-flex w-100 h-50">
                <DashboardCard url="orders" title="Orders" icon />
                <DashboardCard url="users" title="Users" icon />
                <DashboardCard url="products" title="Products" icon />
              </div>
              <div className="popular border rounded mt-2 me-1">
                <DashboardPopular />
                <DashboardUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
