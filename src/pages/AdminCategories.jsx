import AdminCategoriesList from "../components/AdminCategoriesList";
import ModalUpdateCategory from "../components/ModalUpdateCategory";
import ModalAddCategory from "../components/ModalAddCategory";
import AdminSidebar from "../components/AdminSidebar";
import NavAdmin from "../components/NavAdmin";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default () => {
  const [categories, setCategories] = useState([]);
  const token = useSelector((state) => state.user.token);

  //modals
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showUpdateCategory, setShowUpdateCategory] = useState(false);

  //Update things
  const [categoryId, setCategoryId] = useState(false);
  const [categoryName, setCategoryName] = useState(false);
  const [categoryDescription, setCategoryDescription] = useState(false);

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

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col d-flex flex-column p-0  offset-2">
          <NavAdmin />
          <div className="pt-4 px-4 d-flex justify-content-between">
            <h4>Categories</h4>
            <button className="btn btn-dark" onClick={() => setShowAddCategory(true)}>
              Add
            </button>
          </div>
          <AdminCategoriesList
            setShow={setShowUpdateCategory}
            setName={setCategoryName}
            setDescription={setCategoryDescription}
            setID={setCategoryId}
            categories={categories}
            setCategories={setCategories}
          />
          <ModalAddCategory
            show={showAddCategory}
            setShow={setShowAddCategory}
            setCategories={setCategories}
            categories={categories}
          />
          <ModalUpdateCategory
            show={showUpdateCategory}
            setShow={setShowUpdateCategory}
            name={categoryName}
            description={categoryDescription}
            id={categoryId}
            setDescription={setCategoryDescription}
            setName={setCategoryName}
            setCategories={setCategories}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
};
