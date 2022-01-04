import React, { useState, useEffect, useContext } from "react";
import "../style/ShopCartTable.scss";
import { CartCounterContext } from "../App";
import { Link } from "react-router-dom";

function ShopCartTable() {
  const cartCounterSetter = useContext(CartCounterContext);
  const [quantityChange, setQuantityChange] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    localStorage.getItem("cartItems")
      ? setCartItems(JSON.parse(localStorage.getItem("cartItems")))
      : setCartItems([]);
  }, [quantityChange]);
  const handleDeleteItem = (acceptedIndex) => {
    let filteredArr = cartItems.filter((data, index) => index != acceptedIndex);
    console.log(filteredArr);
    setCartItems(filteredArr);
    localStorage.setItem("cartItems", JSON.stringify(filteredArr));
    cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
  };
  const handleIncrease = (acceptedIndex) => {
    cartItems.forEach((data, index) => {
      if (index == acceptedIndex) {
        data.quantity += 1;
        setCartItems(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
        setQuantityChange(quantityChange + 1);
      }
    });
  };
  const handleDecrease = (acceptedIndex) => {
    cartItems.forEach((data, index) => {
      if (index == acceptedIndex) {
        data.quantity -= 1;
        setCartItems(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
        setQuantityChange(quantityChange + 1);
      }
    });
  };
  
  return (
    <>
      {cartItems.length ? (
        <div className="cartTableMainContainer">
          <table>
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
                    <td>
                      <button
                        onClick={() => handleDecrease(index)}
                        disabled={data.quantity <= 1}
                      >
                        -
                      </button>
                      {data.quantity}
                      <button onClick={() => handleIncrease(index)}>+</button>
                    </td>
                    <td>{data.productPrice * data.quantity}$</td>
                    <td>
                      <button onClick={() => handleDeleteItem(index)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="totalContainer">
            {/* <label htmlFor="totalPrice">Total Price</label>
            <p id="totalPrice">{calculateTotalPrice}</p> */}
          </div>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      ) : (
        <>
          <h2>Your Cart Is Empty</h2>
          <Link to="/shop">
            <button>Add Items</button>
          </Link>
        </>
      )}
    </>
  );
}

export default ShopCartTable;
