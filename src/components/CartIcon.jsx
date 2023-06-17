import { AiOutlineShoppingCart } from "react-icons/ai";
import { TOGGLE_SHOWED } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

import "./CartIcon.css";
export default () => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-circle p-2 cart-icon-fixed" onClick={() => dispatch(TOGGLE_SHOWED())}>
      <AiOutlineShoppingCart size={32} />
    </div>
  );
};
