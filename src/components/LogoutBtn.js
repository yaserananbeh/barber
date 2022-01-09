import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IsAuthContext } from "../App";
import { CartCounterContext } from "../App";

function LogoutBtn() {
  const cartCounterSetter = useContext(CartCounterContext);

  const { setIsAuth } = useContext(IsAuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setIsAuth({ email: "guest" });
    localStorage.removeItem("cartItems");
    cartCounterSetter(0);

    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogoutClick}>logout</button>
    </div>
  );
}

export default LogoutBtn;
