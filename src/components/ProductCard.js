import React from "react";
import "../style/ProductCard.scss";

function ProductCard({ data, index }) {
  return (
    <div className="shopCardContainer">
      {console.log(data)}

      <div className="imgArea">
        <img src={data.productImageLink} alt={data.productName} />
      </div>
      <div className="infoArea">
        <h3>{data.productName}</h3>
        <h4>{data.productPrice}$</h4>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
