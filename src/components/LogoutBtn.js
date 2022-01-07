import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IsAuthContext } from "../App";

function LogoutBtn() {
  const { setIsAuth } = useContext(IsAuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setIsAuth({ email: "guest" });
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogoutClick}>logout</button>
    </div>
  );
}

export default LogoutBtn;
