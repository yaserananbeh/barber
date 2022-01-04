import React from "react";
import "../style/ProductsSection.scss";
import products from "./ProductApi.json";
import ProductCard from "./ProductCard";

function ProductsSection() {
  return (
    <div className="shopProductsContainer">
      {products.map((data, index) => {
        return <ProductCard data={data} key={index} index={index} />;
      })}
    </div>
  );
}

export default ProductsSection;
