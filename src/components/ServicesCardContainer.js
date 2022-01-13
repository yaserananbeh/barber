import React, { useState } from "react";
import barberApiData from "./BarbersApi.json";
import BarberCardContainer from "./BarberCardContainer";
import "../style/ServicesCardContainer.scss";

function ServicesCardContainer() {
  return (
    <div className="servicesCardContainer">
      {barberApiData.map((data, index) => {
        return (
          <div key={index}>
            <BarberCardContainer data={data} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default ServicesCardContainer;
