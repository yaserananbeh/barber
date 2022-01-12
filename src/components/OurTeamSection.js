import React from "react";
import ProductCard from "./ProductCard";
function OurTeamSection() {
  let style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3rem auto",
    color: "white",
    textAlign: "center",
  };
  let arr = [
    {
      productName: "GREG ZORIAN",
      productImageLink:
        "https://miro.medium.com/max/1000/1*keHC90qDfxJFlvCQBzxzhw.jpeg",
      productPrice: 90.0,
      quantity: 1,
    },
    {
      productName: "MC Barber",
      productImageLink:
        "https://miro.medium.com/max/625/1*NI7zGGZD4Ki2LhSwM0xohA.jpeg",
      productPrice: 480.0,
      quantity: 1,
    },
    {
      productName: "Kieron The Barber",
      productImageLink:
        "https://miro.medium.com/max/625/1*UgOa0hXsJ2ucYkzwOuYg2w.jpeg",
      productPrice: 55.0,
      quantity: 1,
    },
  ];
  return (
    <div className="ourTeamSecMainContainer" style={style}>
      <p style={{ margin: "4rem auto", width: "80%" }}>
        Our mission to make you able to book and pay your barber easily from
        your home, with the good UI website and the best service ever, try us{" "}
      </p>
      <h2>Our Best Barbers</h2>
      <div className="shopProductsContainer" style={{ margin: "1rem auto" }}>
        {arr.map((data, index) => {
          return <ProductCard key={index} data={data} section="ourTeam" />;
        })}
      </div>
    </div>
  );
}

export default OurTeamSection;
