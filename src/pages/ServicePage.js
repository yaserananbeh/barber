import React from "react";
import ServicesCardContainer from "../components/ServicesCardContainer";
import ShopHeroImage from "../components/ShopHeroImage";
function ServicePage() {
  return (
    <div>
      <ShopHeroImage page="services" />
      <ServicesCardContainer />
    </div>
  );
}

export default ServicePage;
