import React from "react";
import "../style/ShopHeroImage.scss";
function ShopHeroImage() {
  return (
    <div
      className="shopHeroImageContainer"
      style={{ backgroundImage: "url('./assets/images/shopHeroImage.jpg')" }}
    >
      <h2>Shop</h2>
    </div>
  );
}

export default ShopHeroImage;
