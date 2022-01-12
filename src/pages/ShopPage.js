import React from "react";
import ProductsSection from "../components/ProductsSection";
import ShopHeroImage from "../components/ShopHeroImage";

function ShopPage() {
  return (
    <div>
      <ShopHeroImage page="shop"/>
      <ProductsSection />
    </div>
  );
}

export default ShopPage;
