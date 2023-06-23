import "./FilterProductsSidebar.css";
import { BsChevronDown } from "react-icons/bs";
export default ({ setCategoryID }) => {
  return (
    <div>
      <h1 className="border-bottom border-5 py-2 mb-4">Filter Options</h1>
      <div className="border-bottom mb-2">
        <h4 className="d-flex justify-content-between">
          Prices <BsChevronDown />
        </h4>
        <ul className="list-unstyled ">
          <li className="filter-sidebar-item">100.00$</li>
          <li className="filter-sidebar-item">200.00$</li>
          <li className="filter-sidebar-item">300.00$</li>
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
