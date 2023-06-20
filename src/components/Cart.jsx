import { HiOutlineShoppingBag } from "react-icons/hi";
import { TOGGLE_SHOWED } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import CartProduct from "./CartProduct";

import "./Cart.css";

export default () => {
  const product = useSelector((state) => state.cart.products);
  const show = useSelector((state) => state.cart.showed);
  const dispatch = useDispatch();

  return (
    <div className={`cart  border ${show ? "show-cart" : ""}`}>
      <div className="cart-top d-flex justify-content-between p-4">
        <h5>Shopping cart</h5>
        <button
          type="button"
          className="btn-close "
          aria-label="Close"
          onClick={() => dispatch(TOGGLE_SHOWED())}
        ></button>
      </div>
      <div className="shopping-cart h-100 d-flex flex-column ">
        <div className="content d-none flex-column align-items-center p-4">
          <HiOutlineShoppingBag className="bag" />
          <h5 className="mt-3 mb-2">Your cart is empty</h5>
          <p className="text-center">Looks like your shopping cart is empty, give it some love!</p>
        </div>
        <div className="cart-products">
          {product.map((product) => (
            <CartProduct
              img={product.img[0].url}
              name={product.name}
              price={product.unitPrice}
              qty={product.qty}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="cart-bottom border">
        <div className="d-flex justify-content-between px-4 pt-2 mb-0">
          <h5>Sub total</h5>
          <p>USD 0</p>
        </div>
        <p className="ms-4">Shipping and taxes calculated at start </p>
        <div className="d-grid gap-2">
          <Button variant="dark" size="lg" className="m-2">
            Checkout
          </Button>
        </div>
        <div className="d-flex justify-content-center gap-1">
          <p className="">or</p>
          <p className="continue-shopping fw-bold" onClick={() => dispatch(TOGGLE_SHOWED())}>
            Continue Shopping
          </p>
        </div>
      </div>
    </div>
  );
};
