import React from "react";
import { Link } from "react-router-dom";
import "../style/CartBtn.scss";
function CartBtn() {
  return (
    <Link to="/" className="CartBtnContainer">
      <div>
        <img src="./assets/images/shopping-bag-icon.png" alt="cart btn" />
        <span>0</span>
      </div>
    </Link>
  );
}

export default CartBtn;
