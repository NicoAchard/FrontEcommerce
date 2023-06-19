import { useSelector } from "react-redux";

function CartProduct() {
  const user = useSelector((state) => state.user.data);
  return (
    <div className="d-flex">
      <img src="src\img\heybro.png" alt="" />
      <div>
        <p>Product name</p>
        <p>USD 195</p>
      </div>
      <div>
        <p>Qty 1</p>
        <p>Remove</p>
      </div>
    </div>
  );
}

export default CartProduct;
