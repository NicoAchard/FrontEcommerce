import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";
import DashboardCard from "../components/DashboardCard";
import DashboardPopular from "../components/DashboardPopular";
import DashboardUsers from "../components/DashboardUsers";
import SalesChart from "../components/SalesChart";
import "./Dashboard.css";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <AdminSidebar />
      <div className="col d-flex flex-column p-0">
        <NavAdmin />
        <div className="dashboard-space ">
          <div classname="d-flex">
            <div className="d-flex px-1 mb-4">
              <div className="center-space d-flex flex-column">
                <div className="cards d-flex w-100 mb-4">
                  <DashboardCard url="orders" title="Orders" icon="src\img\order.png" />
                  <DashboardCard url="users" title="Users" icon="src\img\user.png" />
                  <DashboardCard url="products" title="Products" icon="src\img\skateboard.png" />
                </div>
                <SalesChart />
              </div>
              <div className="popular border rounded mt-2 me-1">
                <DashboardPopular />
                <hr />
                <DashboardUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
