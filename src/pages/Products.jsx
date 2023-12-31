import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterProductsSidebar";
import FilterSidebarOffcanvas from "../components/FilterProductsSidebarOffcanvas";
import FilterTopBar from "../components/FilterTopBar";

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");

  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [filterByName, setFilterByName] = useState("");
  const [filterItems, setFilterItems] = useState([
    {
      title: "Highlights",
      value: "highlight",
      prop: "boolean",
      options: [{ active: false }],
    },
    {
      title: "Prices",
      value: "price",
      prop: "range",
      options: [
        { name: "Under $150", max: 150, min: 0, active: false },
        { name: "$150 to $200", max: 200, min: 150, active: false },
        { name: "$200 to $400", max: 400, min: 200, active: false },
        { name: "$400 to $1000", max: 1000, min: 400, active: false },
      ],
    },
  ]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/categories`,
        });
        if (response.data.status === 200) {
          const existCategories = filterItems.find((item) => item.title === "Categories");
          if (!existCategories) {
            const options = response.data.categories.map((category) => {
              return {
                name: category.name,
                value: category.id,
                active: !isNaN(categoryParam) && categoryParam === category.id ? true : false,
              };
            });

            const categoriesOptions = {
              title: "Categories",
              value: "categoryId",
              options,
            };
            return setFilterItems([...filterItems, categoriesOptions]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <FilterSidebarOffcanvas
        filterItems={filterItems}
        setFilterItems={setFilterItems}
        showFilterSidebar={showFilterSidebar}
        setShowFilterSidebar={setShowFilterSidebar}
      />
      <div>
        <NavBar />

        <div className="container-xl container-fluid">
          <div className="row">
            <div className="d-none d-md-block  col-3 " style={{ marginTop: "6.2rem" }}>
              <FilterSidebar filterItems={filterItems} setFilterItems={setFilterItems} />
            </div>
            <div className="col h-100 p-4">
              <FilterTopBar
                setFilterByName={setFilterByName}
                filterByName={filterByName}
                setShowFilterSidebar={setShowFilterSidebar}
                showFilterSidebar={showFilterSidebar}
              />
              <ProductsList filters={filterItems} filterByName={filterByName} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
