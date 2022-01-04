import React, { useContext, useEffect, useState } from "react";
import "../style/ProductCard.scss";
import { CartCounterContext } from "../App";

function ProductCard({ data, index, rerender, setRerender }) {
  const cartCounterSetter = useContext(CartCounterContext);
  const [existInCart, setExistInCart] = useState(false);
  useEffect(() => {
    checkIfExist();
  }, [existInCart,rerender]);
  const checkIfExist = () => {
    if (localStorage.getItem("cartItems")) {
      JSON.parse(localStorage.getItem("cartItems")).forEach((element) => {
        if (element.productName == data.productName) {
          setExistInCart(true);
        }
      });
    }
  };
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
      setRerender(rerender + 1);
    } else {
      localStorage.setItem("cartItems", JSON.stringify([choosenItem]));
      cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
      setRerender(rerender + 1);
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
        <button disabled={existInCart} onClick={() => handleAddToCartBtn(data)}>
          {!existInCart ? "Add To Cart" : "Added To Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
