import React, { useContext } from "react";
import "../style/ProductCard.scss";
import { CartCounterContext } from "../App";

function ProductCard({ data, index }) {
  const cartCounterSetter = useContext(CartCounterContext);
  const handleAddToCartBtn = (choosenItem) => {
    if (localStorage.getItem("cartItems")) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("cartItems")),
          choosenItem,
        ])
      );
      cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
    } else {
      localStorage.setItem("cartItems", JSON.stringify([choosenItem]));
      cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
    }
  };

  return (
    <div className="shopCardContainer">
      <div className="imgArea">
        <img src={data.productImageLink} alt={data.productName} />
      </div>
      <div className="infoArea">
        <h3>{data.productName}</h3>
        <h4>{data.productPrice}$</h4>
        <button onClick={() => handleAddToCartBtn(data)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
