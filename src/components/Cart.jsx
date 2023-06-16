import ShoppingCart from "./ShoppingCart";

import "./cart.css";
export default ({ show, handlerCart }) => {
  return (
    <div className={`cart ${show ? "show-cart" : ""}`}>
      <span>text</span>
      <button onClick={() => handlerCart(show)}> cerrar </button>
    </div>
  );
};
