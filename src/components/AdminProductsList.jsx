import { BsTrash, BsPencil } from "react-icons/bs";
function AdminProductsList() {
  return (
    <div className="p-4 ">
      <table className="table border rounded table-hover ">
        <thead className="table-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td className="text-secondary">Otto</td>
            <td>@mdo</td>

            <td className="  d-flex justify-content-between border-bottom-0">
              <span>
                <BsPencil className="fs-5 text-primary" />
              </span>
              <span>
                <BsTrash className="fs-5 text-danger" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminProductsList;
