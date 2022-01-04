import React, { useState, useEffect } from "react";
import "../style/ShopCartTable.scss";

function ShopCartTable() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    localStorage.getItem("cartItems")
      ? setCartItems(JSON.parse(localStorage.getItem("cartItems")))
      : setCartItems([]);
  }, []);
  return (
    <table className="cartTableMainContainer">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <img src={data.productImageLink} alt={data.productName} />
              </td>
              <td>{data.productName}</td>
              <td>{data.quantity}</td>
              <td>{data.productPrice}$</td>
              <td><button>delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ShopCartTable;
