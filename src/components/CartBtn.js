import React from "react";
import { Link } from "react-router-dom";
import "../style/CartBtn.scss";
function CartBtn({ cartCounter }) {
  return (
    <Link to="/cart" className="CartBtnContainer">
      <div>
        <img src="./assets/images/shopping-bag-icon.png" alt="cart btn" />
        <span>{cartCounter}</span>
      </div>
    </Link>
  );
}

export default CartBtn;
