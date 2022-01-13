import React, { useState, useEffect, useContext } from "react";
import "../style/ShopCartTable.scss";
import { CartCounterContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

import swal from "sweetalert";

function CheckoutCartItems() {
  const cartCounterSetter = useContext(CartCounterContext);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [withDiscount, setWithDiscount] = useState(false);
  useEffect(() => {
    setStorageData();
    calculateTotal();
  }, []);
  const setStorageData = () => {
    localStorage.getItem("cartItems")
      ? setCartItems(JSON.parse(localStorage.getItem("cartItems")))
      : setCartItems([]);
    localStorage.getItem("withDiscount")
      ? setWithDiscount(JSON.parse(localStorage.getItem("withDiscount")))
      : setWithDiscount(false);
  };
  const calculateTotal = () => {
    if (localStorage.getItem("cartItems")) {
      let sum = 0;
      JSON.parse(localStorage.getItem("cartItems")).forEach((data) => {
        sum += data.productPrice * data.quantity;
      });
      setTotalPrice(sum);
      return sum;
    }
  };
  const handlePlaceOrder = () => {
    cartCounterSetter(0);
    setCartItems([]);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("withDiscount");
    swal("Order Placed Successfully", "Thank You For Trust Us", "success", {
      button: "Close",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="cartTableMainContainer checkoutCartTable">
      <table className="cartTable">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.productName}</td>

                <td>{data.productPrice}$</td>
                <td className="quantityTd">
                  <span>{data.quantity}</span>
                </td>
                <td>{data.productPrice * data.quantity}$</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Price Without discount</td>
            <td colSpan={3}>{totalPrice}$</td>
          </tr>
          <tr>
            <td colSpan={3}>With discount</td>
            {withDiscount ? (
              <td colSpan={3}>{totalPrice * 0.15}$</td>
            ) : (
              <td colSpan={3}>{totalPrice}$</td>
            )}
          </tr>
          <tr>
            <td colSpan={3}>Total Price</td>
            {withDiscount ? (
              <td colSpan={3}>{totalPrice - 0.15 * totalPrice}$</td>
            ) : (
              <td colSpan={3}>{totalPrice}$</td>
            )}
          </tr>
        </tfoot>
      </table>
      <div className="linksContainer">
        <Link to="/cart">
          <button>Edit Cart</button>
        </Link>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default CheckoutCartItems;
