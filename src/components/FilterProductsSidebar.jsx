import "./FilterProductsSidebar.css";
import { BsChevronDown } from "react-icons/bs";
export default ({ setCategoryID }) => {
  return (
    <div className="filter-container bg-color p-3">
      <h1 className="py-2 mb-4" style={{ marginTop: "100px" }}>
        Filter Options
      </h1>
      <div
        className="mb-2 "
        style={{ borderTop: "0.3rem solid white  ", borderBottom: "0.1rem solid white " }}
      >
        <h4 className="d-flex justify-content-between">
          Prices <BsChevronDown />
        </h4>
        <ul className="list-unstyled ">
          <li className="filter-sidebar-item">up to US$200</li>
          <li className="filter-sidebar-item">US$ 201 - 300</li>
          <li className="filter-sidebar-item">more than US$ 301</li>
        </ul>
      </div>
      <div className="border-bottom mb-2">
        <h4 className="d-flex justify-content-between">
          Category <BsChevronDown />
        </h4>
        <ul className="list-unstyled">
          <li className="filter-sidebar-item" onClick={() => setCategoryID(1)}>
            Skateboards
          </li>
          <li className="filter-sidebar-item" onClick={() => setCategoryID(2)}>
            Cruiserboards
          </li>
          <li className="filter-sidebar-item" onClick={() => setCategoryID(3)}>
            Longboards
          </li>
          <li className="filter-sidebar-item" onClick={() => setCategoryID(4)}>
            Surfboards
          </li>
        </ul>
      </div>
      <div className="border-bottom mb-2">
        <h4 className="d-flex justify-content-between">
          Other <BsChevronDown />
        </h4>
        <ul className="list-unstyled">
          <li className="filter-sidebar-item">filter item</li>
          <li className="filter-sidebar-item">filter item</li>
          <li className="filter-sidebar-item">filter item</li>
        </ul>
      </div>
    </div>
  );
};
