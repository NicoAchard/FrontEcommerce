import { BsFillGrid3X3GapFill, BsSearch, BsFilter } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { FaThList } from "react-icons/fa";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";

export default ({ setFilterByName, setShowFilterSidebar, showFilterSidebar }) => {
  const [searchItem, setSearchItem] = useState("");

  const notify = () => toast("This functionality is under development");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterByName(searchItem);
  };
  return (
    <div
      className="d-flex gap-2 w-100 justify-content-between  pb-3, cursor-pointer"
      style={{ marginTop: "70px" }}
    >
      <ToastContainer
        theme="dark"
        pauseOnFocusLoss={false}
        progressStyle={{ backgroundColor: "#52C9B0" }}
      />
      <div className="d-flex gap-2">
        <div
          className={`${showFilterSidebar && "bg-light"} d-md-none  p-2 rounded `}
          onClick={() => setShowFilterSidebar(!showFilterSidebar)}
        >
          <BsFilter size={30} />
        </div>
        <div className="bg-light p-2 rounded">
          <BsFillGrid3X3GapFill size={30} onClick={notify} />
        </div>
        <div className=" p-2 rounded">
          <FaThList size={30} onClick={notify} />
        </div>
      </div>

      <form className="d-flex w-100 align-items-center justify-content-end" onSubmit={handleSubmit}>
        <label
          htmlFor="product_name"
          className="bg-light rounded border d-flex align-items-center p-2  rounded-end-0 h-100"
        >
          <BsSearch size={20} type="submit" />
        </label>
        <input
          type="text"
          id="product_name"
          name="product_name"
          className="form-control w-50 border-start-0 p-2 rounded-start-0 h-100"
          placeholder="Product name.."
          value={searchItem}
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
        />
      </form>
    </div>
  );
};
