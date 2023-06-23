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
          <div className="top-buyers d-flex p-1 me-2  justify-content-center ">
            <div className="d-flex w-100 ms-4 ps-2">
              <img src={user.avatar} alt="product-img" className="rounded-circle me-3" />
              <div className="d-flex flex-column ">
                <p className="p-0 m-0 fw-bold">
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
