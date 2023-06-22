import { useEffect, useState } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";
import axios from "axios";
import { useSelector } from "react-redux";

export default () => {
  const [categories, setCategories] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const listCategories = async (event) => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/categories`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    };
    listCategories();
  }, []);

  return (
    <div className="p-4 ">
      <table className="table border rounded table-hover ">
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
              <tr>
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
                  <span className="text-primary cursor-pointer">Details</span>
                  <span>
                    <BsTrash className="fs-5 text-danger" />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};