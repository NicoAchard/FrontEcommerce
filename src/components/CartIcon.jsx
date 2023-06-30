import { AiOutlineShoppingCart } from "react-icons/ai";
import { TOGGLE_SHOWED } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import "./CartIcon.css";
import { useEffect } from "react";

export default () => {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  const [productsCartCount, setProductsCartCount] = useState(0);
  const handleIconClick = () => {
    dispatch(TOGGLE_SHOWED());
  };
  useEffect(() => {
    setProductsCartCount(
      products.reduce((qtyAcc, product) => {
        return qtyAcc + product.qty;
      }, 0),
    );
  }, [products]);

  return (
    <>
      <div
        className=" cart-icon-fixed p-2 d-flex align-items-center justify-content-center  rounded-circle bg-color"
        onClick={handleIconClick}
      >
        <AiOutlineShoppingCart size={32} />
        {productsCartCount !== 0 && (
          <div className="postion-relative">
            <span className="cart-product-count text-center">{productsCartCount}</span>
          </div>
        )}
      </div>
    </>
  );
};
