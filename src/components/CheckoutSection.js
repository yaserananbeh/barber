import React from "react";
import "../style/CheckoutSection.scss";
import CheckoutCartItems from "./CheckoutCartItems";
function CheckoutSection() {
  return (
    <div className="checkoutSectionMainContainer">
      <CheckoutCartItems />
    </div>
  );
}

export default CheckoutSection;
