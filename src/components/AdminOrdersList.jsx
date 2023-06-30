import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminOrdersList() {
  const [orders, setOrders] = useState(null);
  const token = useSelector((state) => state.user.token);
  const notify = () => toast("This functionality is under development");

  useEffect(() => {
    const getAll = async (event) => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data);
    };
    getAll();
  }, []);
  return (
    <div className="p-4 ">
      <table className="table border rounded">
        <thead className="table-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User</th>
            <th scope="col">Total price</th>
            <th scope="col">Status</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                <td>
                  {order.user.firstname} {order.user.lastname}
                </td>
                <td>
                  US${" "}
                  {order.products.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.unitPrice * currentValue.qty,
                    0,
                  )}
                </td>
                <td>{order.status}</td>
                <td className="  d-flex justify-content-between border-bottom-0">
                  <span className="text-primary cursor-pointer" onClick={notify}>
                    Details
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrdersList;
