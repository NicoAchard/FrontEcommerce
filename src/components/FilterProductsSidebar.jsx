import "./FilterProductsSidebar.css";
import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";

export default ({ setCategoryID, setFilterPrice, setMax200, setRange201to300, setMin301 }) => {
  const [underlinedItem, setUnderlinedItem] = useState(null);

  return (
    <div className="filter-container bg-color p-3">
      <h1 className="py-2 mb-4">Filter Options</h1>
      <div
        className="mb-2"
        style={{ borderTop: "0.3rem solid white", borderBottom: "0.1rem solid white" }}
      >
        <h4 className="d-flex justify-content-between mt-2">
          Prices <BsChevronDown />
        </h4>
        <ul className="list-unstyled">
          <li
            className={`filter-sidebar-item ${
              underlinedItem === "upTo200" ? "text-decoration-underline" : ""
            }`}
            onClick={() => {
              setFilterPrice(true);
              setMax200(true);
              setRange201to300(false);
              setMin301(false);
              setCategoryID(false);
              setUnderlinedItem("upTo200");
            }}
          >
            up to US$200
          </li>
          <li
            className={`filter-sidebar-item ${
              underlinedItem === "range201to300" ? "text-decoration-underline" : ""
            }`}
            onClick={() => {
              setFilterPrice(true);
              setMax200(false);
              setRange201to300(true);
              setMin301(false);
              setCategoryID(false);
              setUnderlinedItem("range201to300");
            }}
          >
            US$ 201 - 300
          </li>
          <li
            className={`filter-sidebar-item ${
              underlinedItem === "min301" ? "text-decoration-underline" : ""
            }`}
            onClick={() => {
              setFilterPrice(true);
              setMax200(false);
              setRange201to300(false);
              setMin301(true);
              setCategoryID(false);
              setUnderlinedItem("min301");
            }}
          >
            more than US$ 301
          </li>
        </ul>
      </div>
      <div className="border-bottom mb-2">
        <h4 className="d-flex justify-content-between">
          Category <BsChevronDown />
        </h4>
        <ul className="list-unstyled">
          <li
            className={`filter-sidebar-item ${
              underlinedItem === "skateboards" ? "text-decoration-underline" : ""
            }`}
            onClick={() => {
              setCategoryID(1);
              setFilterPrice(false);
              setUnderlinedItem("skateboards");
            }}
          >
            Skateboards
          </li>
          <li
            className={`filter-sidebar-item ${
              underlinedItem === "cruiserboards" ? "text-decoration-underline" : ""
            }`}
            onClick={() => {
              setCategoryID(2);
              setFilterPrice(false);
              setUnderlinedItem("cruiserboards");
            }}
          >
            Cruiserboards
          </li>
          <li
            className={`filter-sidebar-item ${
              underlinedItem === "longboards" ? "text-decoration-underline" : ""
            }`}
            onClick={() => {
              setCategoryID(3);
              setFilterPrice(false);
              setUnderlinedItem("longboards");
            }}
          >
            Longboards
          </li>
          <li
            className={`filter-sidebar-item ${
              underlinedItem === "surfboards" ? "text-decoration-underline" : ""
            }`}
            onClick={() => {
              setCategoryID(4);
              setFilterPrice(false);
              setUnderlinedItem("surfboards");
            }}
          >
            Surfboards
          </li>
        </ul>
      </div>
    </div>
  );
};
