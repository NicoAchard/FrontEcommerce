import "./FilterProductsSidebar.css";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

export default ({ filterItems, setFilterItems }) => {
  const [selected, setSelected] = useState([]);

  const handleSelectFilterOption = (FilterOptionTittle, FilterOptionSelected) => {
    const changeFilterOption = filterItems.map((item) =>
      item.tittle === FilterOptionTittle
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
      const existOption = selected.find(
        (selectedItem) => selectedItem.tittle === FilterOptionTittle,
      );
      if (existOption) {
        const updateSelectedOptions = selected.map((selectedItem) =>
          selectedItem.tittle === FilterOptionTittle
            ? { ...selectedItem, value: FilterOptionSelected }
            : selectedItem,
        );
        setSelected(updateSelectedOptions);
      } else {
        setSelected([...selected, { tittle: FilterOptionTittle, value: FilterOptionSelected }]);
      }
    } else {
      setSelected([{ tittle: FilterOptionTittle, value: FilterOptionSelected }]);
    }
  };

  return (
    <div className="filter-container bg-color p-3">
      <h1 className="py-2 mb-4" style={{ marginTop: "100px" }}>
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
                  {filterItem.tittle} <BsChevronDown />
                </h4>
                <ul className="list-unstyled">
                  {filterItem.options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectFilterOption(filterItem.tittle, option.name)}
                      className={`filter-sidebar-item ${
                        selected.length > 0 &&
                        selected.find(
                          (selectedItem) =>
                            selectedItem.tittle === filterItem.tittle &&
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
    </div>
  );
};
