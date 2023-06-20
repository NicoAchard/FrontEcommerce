import { HiOutlineShoppingBag } from "react-icons/hi";
import { TOGGLE_SHOWED } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import CartProduct from "./CartProduct";

import "./Cart.css";

export default () => {
  const products = useSelector((state) => state.cart.products);
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
        {console.log(products)}
        {products.length > 0 ? (
          <div className="cart-products">
            {products.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                img={product.img[0].url}
                name={product.name}
                price={product.unitPrice}
                qty={product.qty}
              />
            ))}
          </div>
        ) : (
          <div className="content d-flex flex-column align-items-center justify-content-center p-4">
            <HiOutlineShoppingBag className="bag mt-4 mb-2" />
            <h5 className="mt-3 fs-4">Your cart is empty!</h5>
            <p className="text-center fs-5 p-2">
              Looks like your shopping cart is empty, give it some love!
            </p>
          </div>
        )}
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
