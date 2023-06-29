import { useEffect, useState } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";
import axios from "axios";
import { useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

function AdminProductsList({
  setShow,
  setProductId,
  setName,
  setDescription,
  setHighlight,
  setStock,
  setPrice,
  setPhotos,
  setCategoryId,
  photoGallery,
  setPhotoGallery,
}) {
  const [products, setProducts] = useState(null);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const addProducts = async () => {
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

    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdate = (id, name, description, highlight, stock, price, photos, categoryId) => {
    setShow(true);
    setProductId(id);
    setName(name);
    setDescription(description);
    setHighlight(highlight);
    setStock(stock);
    setPrice(price);
    setPhotos(photos);
    setCategoryId(categoryId);
    setPhotoGallery(photos);
  };

  return (
    <div className="p-4 table-responsive">
      <table className="table border rounded">
        <thead className="table-light">
          <tr>
            <th scope="col" className="d-none d-md-table-cell">
              Id
            </th>
            <th scope="col">Name</th>
            <th scope="col" className="d-none d-md-table-cell">
              Description
            </th>
            <th scope="col" className="d-none d-md-table-cell">
              Highlight
            </th>
            <th scope="col" className="d-none d-md-table-cell">
              Stock
            </th>
            <th scope="col" className="d-none d-md-table-cell">
              Price
            </th>
            <th scope="col">Photos</th>
            <th scope="col" className="d-none d-md-table-cell">
              CategoryId
            </th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <th scope="row" className="d-none d-md-table-cell">
                  {product.id}
                </th>
                <td>{product.name}</td>
                <td className="d-none d-md-table-cell">
                  {product.description.split(" ").slice(0, 15).join(" ")} ...
                </td>
                <td className="d-none d-md-table-cell">{product.highlight ? "Yes" : "No"}</td>
                <td className="d-none d-md-table-cell">{product.stock}</td>
                <td className="text-secondary d-none d-md-table-cell">US$ {product.price}</td>
                <td>
                  {product.photos.map((photo, index) => (
                    <img
                      key={index}
                      className="my-2"
                      style={{ width: "80px", height: "90px" }}
                      src={`${import.meta.env.VITE_API_IMG}/${photo.url}`}
                      alt={`Photo ${index}`}
                    />
                  ))}
                </td>
                <td className="d-none d-md-table-cell">{product.categoryId}</td>
                <td className="d-flex justify-content-between border-bottom-0">
                  <span
                    className="cursor-pointer"
                    onClick={() =>
                      handleUpdate(
                        product.id,
                        product.name,
                        product.description,
                        product.highlight,
                        product.stock,
                        product.price,
                        product.photos,
                        product.categoryId,
                      )
                    }
                  >
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
