import { BsTrash, BsPencil } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
export default ({ categories, setCategories, setShow, setName, setDescription, setID }) => {
  const token = useSelector((state) => state.user.token);

  const handleRemove = async (id) => {
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/categories/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCategories(categories.filter((category) => category.id !== id));
  };
  const handleUpdate = (id, name, description) => {
    setShow(true);
    setDescription(description);
    setName(name);
    setID(id);
  };

  return (
    <div className="p-4 ">
      <table className="table border rounded">
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
                  <span
                    className="cursor-pointer"
                    onClick={() => handleUpdate(category.id, category.name, category.description)}
                  >
                    <BsPencil className="fs-5 text-primary" />
                  </span>
                  <span>
                    <BsTrash
                      className="fs-5 text-danger cursor-pointer"
                      onClick={() => handleRemove(category.id)}
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
