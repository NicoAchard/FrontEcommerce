import { useEffect, useState } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminProductsList() {
  const [products, setProducts] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const addProducts = async (event) => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data);
    };
    addProducts();
  }, []);
  const handleDeleteProduct = async (id) => {
    await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/products/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setProducts(products.filter((user) => user.id !== id));
  };
  return (
    <div className="p-4 ">
      <table className="table border rounded table-hover ">
        <thead className="table-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td className="text-secondary">US$ {product.price}</td>
                <td>{product.stock}</td>

                <td className="  d-flex justify-content-between border-bottom-0">
                  <span>
                    <BsPencil className="fs-5 text-primary" />
                  </span>
                  <span className="cursor-pointer" onClick={() => handleDeleteProduct(product.id)}>
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

export default AdminProductsList;
