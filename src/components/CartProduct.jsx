import { useDispatch } from "react-redux";
import { REMOVE_PRODUCT } from "../redux/cartSlice";
import "./CartProduct.css";

function CartProduct({ id, img, name, price, qty }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-product d-flex p-3 me-2">
      <img src={`${import.meta.env.VITE_API_IMG}/${img}`} alt="product-img" />
      <div className="d-flex flex-column justify-content-between w-100">
        <div className="d-flex justify-content-between">
          <p>{name}</p>
          <p>USD {price}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Qty {qty}</p>
          <p className="fw-bold cursor-pointer" onClick={() => dispatch(REMOVE_PRODUCT(id))}>
            Remove
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
