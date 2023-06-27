import AdminCategoriesList from "../components/AdminCategoriesList";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";
import ModalAddCategory from "../components/ModalAddCategory";
import ModalUpdateCategory from "../components/ModalUpdateCategory";

import { useEffect, useState } from "react";

export default () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showUpdateCategory, setShowUpdateCategory] = useState(false);

  const [categoryId, setCategoryId] = useState(false);
  const [categoryName, setCategoryName] = useState(false);
  const [categoryDescription, setCategoryDescription] = useState(false);

  useEffect(() => {
    console.log(categoryId);
    console.log(categoryName);
    console.log(categoryDescription);
  }, [categoryId, categoryName, categoryDescription]);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col d-flex flex-column p-0  offset-2">
          <NavAdmin />
          <div className="pt-4 px-4 d-flex justify-content-between">
            <h4>Categories</h4>
            <button className="btn btn-dark" onClick={() => setShow(true)}>
              Add
            </button>
          </div>
          <AdminCategoriesList
            setShow={setShowUpdateCategory}
            setName={setCategoryName}
            setDescription={setCategoryDescription}
            setID={setCategoryId}
          />
          <ModalAddCategory show={showAddCategory} setShow={setShowAddCategory} />
          <ModalUpdateCategory
            show={showUpdateCategory}
            setShow={setShowUpdateCategory}
            name={categoryName}
            description={categoryDescription}
            id={categoryId}
            setDescription={setCategoryDescription}
            setName={setCategoryName}
          />
        </div>
      </div>
    </div>
  );
};
