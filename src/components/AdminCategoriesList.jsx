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

  const handleRemoveCategory = async (id) => {
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/categories/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    setCategories(categories.filter((category) => category.id !== id));
  };
  return (
    <div className="p-4 ">
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
              <tr>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className="d-flex gap-4 justify-content-between border-bottom-0">
                  <span className="text-primary cursor-pointer">Details</span>
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
