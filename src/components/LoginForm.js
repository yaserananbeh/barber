import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IsAuthContext } from "../App";
import "../style/LoginForm.scss";

function LoginForm() {
  const { setIsAuth } = useContext(IsAuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("empty");
  const [loginData, setLoginData] = useState({
    email: "",
    password1: "",
  });
  let [cartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")).length
      : 0
  );
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let errorFieldsArr = [];
    let registerLocker = 0;
    loginData.email.includes(".") &&
    loginData.email.length >= 6 &&
    loginData.email.includes("@") &&
    loginData.email[loginData.email.length - 1] !== "."
      ? (registerLocker += 1)
      : errorFieldsArr.push("email");
    loginData.password1.length >= 6
      ? (registerLocker += 1)
      : errorFieldsArr.push("password1");
    if (errorFieldsArr.length === 0) {
      setError("empty");
      let previousData = localStorage.getItem("usersArr")
        ? JSON.parse(localStorage.getItem("usersArr"))
        : [];
      let exist = false;
      let loggedInUserObj = {};
      previousData.forEach((data) => {
        if (
          data.email === loginData.email &&
          data.password1 === loginData.password1
        ) {
          exist = true;
          loggedInUserObj = data;
          return;
        }
      });
      if (exist) {
        setError("empty");
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserObj));
        setIsAuth(loggedInUserObj);
        if (cartItems) {
          navigate("/checkout");
        } else {
          navigate("/");
        }
      } else {
        setError("The email or password incorrect ");
      }
    } else {
      setError("please follow the inputs instructions");
    }
  };
  return (
    <div>
      <section className="loginFormSection">
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          {error !== "empty" && <p className="errorMessage">{error}</p>}

          <div className="formControl">
            <label htmlFor="email">Email </label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              value={loginData.email || ""}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <p>
              Should be a valid email{" "}
              {loginData.email.includes(".") &&
              loginData.email.length >= 6 &&
              loginData.email.includes("@") &&
              loginData.email[loginData.email.length - 1] !== "." ? (
                <i className="far fa-check-circle"></i>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="formControl">
            <label htmlFor="password1">Password </label>
            <input
              autoComplete="off"
              type="password"
              id="password1"
              name="password1"
              value={loginData.password1 || ""}
              onChange={(e) =>
                setLoginData({ ...loginData, password1: e.target.value })
              }
            />
            <p>
              Should be 6 digits at least{" "}
              {loginData.password1.length >= 6 ? (
                <i className="far fa-check-circle"></i>
              ) : (
                ""
              )}
            </p>
          </div>
          <Link to="/register">You don't have an account ?</Link>
          <button>Login</button>
        </form>
      </section>
    </div>
  );
}

export default LoginForm;
