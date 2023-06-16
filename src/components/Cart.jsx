import { HiOutlineShoppingBag } from "react-icons/hi";

function Cart() {
  return (
    <div className="cart-container border">
      <h5>ShoppingCart</h5>
      <div>
        <HiOutlineShoppingBag />
        <h5>Your cart is empty</h5>
        <p>Looks like your shopping cart is empty, give it some love!</p>
      </div>
    </div>
  );
}

export default Cart;
