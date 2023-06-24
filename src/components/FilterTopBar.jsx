import { BsFillGrid3X3GapFill, BsSearch } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

export default (filterByName, setFilterByName, products) => {
  return (
    <div
      className="d-flex gap-2 w-100 justify-content-between border-bottom pb-3, cursor-pointer"
      style={{ marginTop: "100px" }}
    >
      <div className="d-flex gap-2">
        <div className="bg-light p-2 rounded">
          <BsFillGrid3X3GapFill size={30} />
        </div>
        <div className=" p-2 rounded">
          <FaThList size={30} />
        </div>
      </div>

      <form className="d-flex w-100 align-items-center justify-content-end">
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
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
        />
      </form>
    </div>
  );
};
