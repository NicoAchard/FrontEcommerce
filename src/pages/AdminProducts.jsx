import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";
import AdminProductsList from "../components/AdminProductsList";
import { useState } from "react";
import ModalAddProduct from "../components/ModalAddProduct";
import ModalUpdateProduct from "../components/ModalUpdateProduct";

export default () => {
  const [show, setShow] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);

  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productHighlight, setProductHighlight] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPhotos, setProductPhotos] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");
  const [photoGallery, setPhotoGallery] = useState([]);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col d-flex flex-column p-0  offset-2">
          <NavAdmin />
          <div className="pt-4 px-4 d-flex justify-content-between">
            <h4>Products</h4>
            <button onClick={() => setShow(true)} className="btn btn-dark">
              Add products
            </button>
          </div>
          <AdminProductsList
            setProductId={setProductId}
            setName={setProductName}
            setDescription={setproductDescription}
            setHighlight={setProductHighlight}
            setStock={setProductStock}
            setPrice={setProductPrice}
            setPhotos={setProductPhotos}
            setCategoryId={setProductCategoryId}
            setShow={setShowUpdateProduct}
            setPhotoGallery={setPhotoGallery}
            photoGallery={photoGallery}
          />
          <ModalAddProduct show={show} setShow={setShow} />
          <ModalUpdateProduct
            show={showUpdateProduct}
            setShow={setShowUpdateProduct}
            id={productId}
            name={productName}
            setName={setProductName}
            description={productDescription}
            setDescription={setproductDescription}
            highlight={productHighlight}
            setHighlight={setProductHighlight}
            stock={productStock}
            setStock={setProductStock}
            price={productPrice}
            setPrice={setProductPrice}
            photos={productPhotos}
            setPhotos={setProductPhotos}
            categoryId={productCategoryId}
            setCategoryId={setProductCategoryId}
            setPhotoGallery={setPhotoGallery}
            photoGallery={photoGallery}
          />
        </div>
      </div>
    </div>
  );
};
