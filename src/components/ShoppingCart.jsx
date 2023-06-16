import { HiOutlineShoppingBag } from "react-icons/hi";
import "./ShoppingCart.css";
import Button from "react-bootstrap/Button";

function ShoppingCart() {
  return (
    <div className="cart-container border ">
      <div className="d-flex justify-content-between p-4">
        <h5>Shopping cart</h5>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className="cart d-flex flex-column align-items-center">
        <div className="content border d-flex flex-column align-items-center p-4 ">
          <HiOutlineShoppingBag className="bag" />
          <h5 className="mt-3 mb-2">Your cart is empty</h5>
          <p className="text-center">Looks like your shopping cart is empty, give it some love!</p>
        </div>
      </div>
      <hr />
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
        <p className="fw-bold"> Continue Shopping</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
