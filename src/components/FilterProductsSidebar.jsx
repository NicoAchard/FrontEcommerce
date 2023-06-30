import "./FilterProductsSidebar.css";
import { BsChevronDown } from "react-icons/bs";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { useState } from "react";

export default ({ filterItems, setFilterItems }) => {
  const [selected, setSelected] = useState([]);

  const handleSelectFilterOption = (FilterOptionTitle, FilterOptionSelected) => {
    const changeFilterOption = filterItems.map((item) => {
      if (item.title === FilterOptionTitle && item.prop !== "boolean") {
        return {
          ...item,
          options: item.options.map((option) =>
            option.name === FilterOptionSelected
              ? { ...option, active: true }
              : { ...option, active: false },
          ),
        };
      }
      if (item.title === FilterOptionTitle && item.prop === "boolean") {
        return {
          ...item,
          options: [{ active: !item.options[0].active }],
        };
      }
      return item;
    });
    setFilterItems(changeFilterOption);
    if (selected.length > 0) {
      const existOption = selected.find((selectedItem) => selectedItem.title === FilterOptionTitle);
      if (existOption) {
        const updateSelectedOptions = selected.map((selectedItem) =>
          selectedItem.title === FilterOptionTitle
            ? { ...selectedItem, value: FilterOptionSelected }
            : selectedItem,
        );
        setSelected(updateSelectedOptions);
      } else {
        setSelected([...selected, { title: FilterOptionTitle, value: FilterOptionSelected }]);
      }
    } else {
      setSelected([{ title: FilterOptionTitle, value: FilterOptionSelected }]);
    }
  };

  const handleRemoveFilters = () => {
    const newFilterItems = filterItems.map((filter) => {
      return {
        ...filter,
        options: filter.options.map((option) => {
          return { ...option, active: false };
        }),
      };
    });
    setFilterItems(newFilterItems);
    setSelected([]);
  };

  return (
    <>
      <div className="filter-container p-3 d-none d-md-block bg-color">
        <h3 style={{ marginTop: "10px" }}>Filter Options</h3>
        <div
          className="mb-2"
          style={{ borderTop: "0.3rem solid white", borderBottom: "0.1rem solid white" }}
        >
          {filterItems.length > 0
            ? filterItems.map((filterItem, index) => (
                <div key={index}>
                  {filterItem.prop !== "boolean" ? (
                    <h5 className="d-flex align-items-center justify-content-between mt-2">
                      {filterItem.title} <BsChevronDown />
                    </h5>
                  ) : (
                    <h5 className="align-items-center d-flex justify-content-between my-4">
                      {filterItem.title}
                      {filterItem.options[0].active === false ? (
                        <FaRegSquare
                          className="cursor-pointer"
                          onClick={() => handleSelectFilterOption(filterItem.title, false)}
                        />
                      ) : (
                        <FaRegCheckSquare
                          className="cursor-pointer"
                          onClick={() => handleSelectFilterOption(filterItem.title, true)}
                        />
                      )}
                    </h5>
                  )}
                  <ul className="list-unstyled">
                    {filterItem.options.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectFilterOption(filterItem.title, option.name)}
                        className={`filter-sidebar-item ${
                          selected.length > 0 &&
                          selected.find(
                            (selectedItem) =>
                              selectedItem.title === filterItem.title &&
                              selectedItem.value === option.name,
                          ) &&
                          "text-decoration-underline"
                        }`}
                      >
                        {option.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : ""}
        </div>
        <div className="text-center">
          <span className="cursor-pointer fw-bold fs-5 " onClick={handleRemoveFilters}>
            Remove all filters
          </span>
        </div>
      </div>
    </>
  );
};
