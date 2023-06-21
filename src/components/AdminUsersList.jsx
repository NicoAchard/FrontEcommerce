import { BsTrash, BsPencil } from "react-icons/bs";
import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

function AdminUsersList() {
  const [users, setUsers] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const addOrders = async (event) => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/users`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(response.data);
    };
    addOrders();
  }, []);

  return (
    <div className="p-4 ">
      <table className="table border rounded table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Avatar</th>
            <th scope="col">Full name</th>
            <th scope="col">Email</th>
            <th scope="col"> Role</th>

            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>Mark</td>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>
                <td> {user.roleId}</td>

                <td className="  d-flex justify-content-between border-bottom-0">
                  <span>
                    <BsPencil className="fs-5 text-primary" />
                  </span>
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
}

export default AdminUsersList;
