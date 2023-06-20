import { useSelector } from "react-redux";
import "./CartProduct.css";

function CartProduct({ img, name, price, qty }) {
  return (
    <div className="cart-product d-flex p-3 me-2">
      <img src={img} alt="" className="mr-3" />
      <div className="d-flex flex-column justify-content-between w-100">
        <div className="d-flex justify-content-between">
          <p>{name}</p>
          <p>USD {price}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Qty {qty}</p>
          <p className="fw-bold">Remove</p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
