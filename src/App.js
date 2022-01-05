import React, { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EmptyPage from "./pages/EmptyPage";
import OurNav from "./components/OurNav";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindBarberPage from "./pages/FindBarberPage";
import ShopPage from "./pages/ShopPage";
import CartBtn from "./components/CartBtn";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

export const CartCounterContext = createContext();
function App() {
  let [cartCounter, setCartCounter] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")).length
      : 0
  );
  return (
    <div>
      <BrowserRouter className="appMainContainer">
        <CartCounterContext.Provider value={setCartCounter}>
          <OurNav />
          <CartBtn cartCounter={cartCounter} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/findBarber" element={<FindBarberPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<EmptyPage />} />
          </Routes>
          <Footer />
        </CartCounterContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
