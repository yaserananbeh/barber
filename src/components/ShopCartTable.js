import React, { useState, useEffect, useContext } from "react";
import "../style/ShopCartTable.scss";
import { CartCounterContext, IsAuthContext } from "../App";
import { Link } from "react-router-dom";

function ShopCartTable() {
  const cartCounterSetter = useContext(CartCounterContext);
  const { isAuth } = useContext(IsAuthContext);
  const [quantityChange, setQuantityChange] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponInput, setCouponInput] = useState("");

  useEffect(() => {
    setStorageData();
    calculateTotal();
  }, [quantityChange]);
  const setStorageData = () => {
    localStorage.getItem("cartItems")
      ? setCartItems(JSON.parse(localStorage.getItem("cartItems")))
      : setCartItems([]);
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
  const handleDeleteItem = (acceptedIndex) => {
    let filteredArr = cartItems.filter(
      (data, index) => index !== acceptedIndex
    );
    setCartItems(filteredArr);
    localStorage.setItem("cartItems", JSON.stringify(filteredArr));
    cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
    calculateTotal();
  };
  const handleIncrease = (acceptedIndex) => {
    cartItems.forEach((data, index) => {
      if (index === acceptedIndex) {
        data.quantity += 1;
        setCartItems(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
        setQuantityChange(quantityChange + 1);
      }
    });
    calculateTotal();
  };
  const handleDecrease = (acceptedIndex) => {
    cartItems.forEach((data, index) => {
      if (index === acceptedIndex) {
        data.quantity -= 1;
        setCartItems(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartCounterSetter(JSON.parse(localStorage.getItem("cartItems")).length);
        setQuantityChange(quantityChange + 1);
      }
    });
    calculateTotal();
  };
  const handleSubmitCoupon = (e) => {
    e.preventDefault();
    if (couponInput === "co123") {
      if (calculateTotal() === totalPrice) {
        setTotalPrice(totalPrice - totalPrice * 0.15);
        localStorage.setItem("withDiscount", JSON.stringify(true));
        document.querySelector(".couponResponse").innerHTML =
          "Added Successfully";
        e.target.reset();
      } else {
        setTotalPrice(totalPrice);
        localStorage.removeItem("withDiscount");
        document.querySelector(".couponResponse").innerHTML =
          "Not valid coupon ";
      }
    } else {
      setTotalPrice(calculateTotal());
      localStorage.removeItem("withDiscount");
      document.querySelector(".couponResponse").innerHTML = "Not valid coupon ";
    }
  };
  return (
    <>
      {cartItems.length ? (
        <div className="cartTableMainContainer">
          <table className="cartTable">
            <thead>
              <tr>
                <th>-</th>
                <th>Photo</th>
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
                    <td>
                      <button onClick={() => handleDeleteItem(index)}>x</button>
                    </td>
                    <td>
                      <img src={data.productImageLink} alt={data.productName} />
                    </td>
                    <td>{data.productName}</td>

                    <td>{data.productPrice}$</td>
                    <td className="quantityTd">
                      <button
                        onClick={() => handleDecrease(index)}
                        disabled={data.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{data.quantity}</span>
                      <button onClick={() => handleIncrease(index)}>+</button>
                    </td>
                    <td>{data.productPrice * data.quantity}$</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>TOTAL PRICE</td>
                <td colSpan={3}>{totalPrice}$</td>
              </tr>
              <tr>
                <td colSpan={6} className="couponContainer">
                  <form onSubmit={handleSubmitCoupon}>
                    <label htmlFor="couponInput">Coupon</label>
                    <input
                      type="text"
                      id="couponInput"
                      onChange={(e) => setCouponInput(e.target.value)}
                    />
                    <button>Apply</button>
                    <p className="couponResponse"></p>
                  </form>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="linksContainer">
            <Link to="/shop">
              <button>Add Items</button>
            </Link>
            {isAuth.email.length > 5 ? (
              <Link to="/checkout">
                <button>Checkout</button>
              </Link>
            ) : (
              <Link to="/login">
                <button>Checkout</button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="emptyCartMainContainer">
          <h2>Your Cart Is Empty</h2>
          <Link to="/shop">
            <button>Add Items</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ShopCartTable;
