import React from "react";
import "../style/ShopHeroImage.scss";
function ShopHeroImage({ page = "" }) {
  return (
    <div
      className="shopHeroImageContainer"
      style={{ backgroundImage: "url('./assets/images/shopHeroImage.jpg')" }}
    >
      <h2>{page}</h2>
    </div>
  );
}

export default ShopHeroImage;
