import React, { useState } from "react";
import barberApiData from "./BarbersApi.json";
import swal from "sweetalert";
import BarberCardContainer from "./BarberCardContainer";

function ServicesCardContainer() {
  return (
    <div style={{ color: "white" }}>
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
