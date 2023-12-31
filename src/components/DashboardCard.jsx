import "./DashboardCard.css";
import img from "../img/graph-icon.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DashboardCard({ url, title, icon }) {
  const [info, setInfo] = useState(null);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    async function getInfo() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/${url}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
  }, []);
  return (
    <div className="rounded p-4 my-2 mx-1 border">
      {info ? (
        <div>
          <div className="dash-card fs-5 d-flex justify-content-between mb-4">
            <p>{title}</p>
            <img src={icon} alt="card-img" />
          </div>
          <div className="mb-4">
            <p className="fs-2 ps-1 fw-bold">{info.length}</p>
          </div>
          <div className="growth mb-3 d-flex">
            <img src={img} alt="graph-icon" className="pe-2" />
            <span className="text-success"> 17%</span>
            <p className="ps-4"> Since last week </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default DashboardCard;
