import React, { useEffect, useState } from "react";
import "../style/ProductsSection.scss";
import products from "./ProductApi.json";
import ProductCard from "./ProductCard";

function ProductsSection() {
  const [rerender, setRerender] = useState(1);
  useEffect(() => {
    localStorage.setItem("ourProductsArr", JSON.stringify(products));
  });
  return (
    <div className="shopProductsContainer">
      {products.map((data, index) => {
        return (
          <ProductCard
            data={data}
            key={index}
            index={index}
            rerender={rerender}
            setRerender={setRerender}
          />
        );
      })}
    </div>
  );
}

export default ProductsSection;
