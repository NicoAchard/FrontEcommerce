import { ToastContainer, toast } from "react-toastify";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
export default () => {
  const [categories, setCategories] = useState(null);
  const token = useSelector((state) => state.user.token);

  const notify = () => toast("This functionality is under development");

  useEffect(() => {
    const listCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/categories`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.status === 200) {
        setCategories(response.data.categories);
      }
    };
    listCategories();
  }, []);

  const handleRemoveCategory = async (id) => {
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/categories/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCategories(categories.filter((category) => category.id !== id));
  };
  return (
    <div className="p-4 ">
      <ToastContainer
        theme="dark"
        pauseOnFocusLoss={false}
        progressStyle={{ backgroundColor: "#52C9B0" }}
      />
      <table className="table border rounded table-hover ">
        <thead className="table-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">description</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category) => (
              <tr key={category.id}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className="d-flex gap-4 justify-content-between border-bottom-0">
                  <span className="cursor-pointer " onClick={notify}>
                    <BsPencil className="fs-5 text-primary" />
                  </span>
                  <span>
                    <BsTrash
                      className="fs-5 text-danger cursor-pointer"
                      onClick={() => handleRemoveCategory(category.id)}
                    />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
