import "./DashboardUsers.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DashboardUsers({}) {
  const [topBuyers, settopBuyers] = useState(null);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    async function gettopBuyers() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/users`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const TopFiveBuyers = response.data.slice(0, 5);
        console.log(TopFiveBuyers);
        settopBuyers(TopFiveBuyers);
      } catch (error) {
        console.log(error);
      }
    }
    gettopBuyers();
  }, []);
  return (
    <div>
      <p className="text-center fw-bold fs-5 mt-2">Top buyers</p>
      {topBuyers &&
        topBuyers.map((user) => (
          <div className="top-buyers d-flex p-1 me-2">
            <img src={user.avatar} alt="product-img" />
            <div className="d-flex flex-column">
              <div>
                <p className="p-0 m-0">
                  holaa
                  {user.firstname} {user.lastname}
                </p>
                <p className="p-0 total-spent">total spent: USD </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default DashboardUsers;