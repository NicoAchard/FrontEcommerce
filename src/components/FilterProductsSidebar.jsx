import "./FilterProductsSidebar.css";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

export default ({ filterItems, setFilterItems }) => {
  const [selected, setSelected] = useState([]);

  const handleSelectFilterOption = (FilterOptionTitle, FilterOptionSelected) => {
    const changeFilterOption = filterItems.map((item) =>
      item.title === FilterOptionTitle
        ? {
            ...item,
            options: item.options.map((option) =>
              option.name === FilterOptionSelected
                ? { ...option, active: true }
                : { ...option, active: false },
            ),
          }
        : item,
    );
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
    console.log(filterItems);
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
    <div className="filter-container bg-color p-3">
      <h1 className="py-2 mb-4" style={{ marginTop: "65px" }}>
        Filter Options
      </h1>
      <div
        className="mb-2"
        style={{ borderTop: "0.3rem solid white", borderBottom: "0.1rem solid white" }}
      >
        {filterItems.length > 0
          ? filterItems.map((filterItem, index) => (
              <div key={index}>
                <h4 className="d-flex justify-content-between mt-2">
                  {filterItem.title} <BsChevronDown />
                </h4>
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
  );
};
