import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/RegisterForm.scss";
import { IsAuthContext } from "../App";

function RegisterForm() {
  const { setIsAuth } = useContext(IsAuthContext);
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [usersArr, setUsersArr] = useState([]);
  const [error, setError] = useState("empty");
  let [cartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")).length
      : 0
  );

  useEffect(() => {
    console.log(usersArr);
  }, [usersArr]);
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let registerLocker = 0;
    let errorFieldsArr = [];
    registerData.username.length >= 5
      ? (registerLocker += 1)
      : errorFieldsArr.push("username");
    registerData.email.includes(".") &&
    registerData.email.length >= 6 &&
    registerData.email.includes("@") &&
    registerData.email[registerData.email.length - 1] !== "."
      ? (registerLocker += 1)
      : errorFieldsArr.push("email");
    registerData.password1.length >= 6
      ? (registerLocker += 1)
      : errorFieldsArr.push("password1");
    registerData.password1 === registerData.password2 &&
    registerData.password1.length >= 6
      ? (registerLocker += 1)
      : errorFieldsArr.push("password2");

    if (errorFieldsArr.length === 0) {
      setError("empty");
      let previousData = localStorage.getItem("usersArr")
        ? JSON.parse(localStorage.getItem("usersArr"))
        : [];
      let exist = false;
      previousData.forEach((data) => {
        if (data.email === registerData.email) {
          exist = true;
          return;
        }
      });
      if (!exist) {
        setError("empty");
        setUsersArr([...previousData, registerData]);
        localStorage.setItem(
          "usersArr",
          JSON.stringify([...previousData, registerData])
        );
        localStorage.setItem("loggedInUser", JSON.stringify(registerData));
        setIsAuth(registerData);
        if (cartItems) {
          navigate("/checkout");
        } else {
          navigate("/");
        }
      } else {
        setError("this email exist before please login");
      }
    } else {
      setError("please follow the inputs instructions");
    }
  };
  return (
    <section className="registerFormSection">
      <form onSubmit={handleRegisterSubmit}>
        <h2>Register</h2>
        {error !== "empty" && <p className="errorMessage">{error}</p>}
        <div className="formControl">
          <label htmlFor="username">Username </label>
          <input
            autoComplete="off"
            type="text"
            id="username"
            name="username"
            value={registerData.username || ""}
            onChange={(e) =>
              setRegisterData({ ...registerData, username: e.target.value })
            }
          />
          <p>
            Should be 5 digits at least{" "}
            {registerData.username.length >= 5 ? (
              <i className="far fa-check-circle"></i>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="formControl">
          <label htmlFor="email">Email </label>
          <input
            autoComplete="off"
            type="email"
            id="email"
            name="email"
            value={registerData.email || ""}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
          <p>
            Should be a valid email{" "}
            {registerData.email.includes(".") &&
            registerData.email.length >= 6 &&
            registerData.email.includes("@") &&
            registerData.email[registerData.email.length - 1] !== "." ? (
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
            value={registerData.password1 || ""}
            onChange={(e) =>
              setRegisterData({ ...registerData, password1: e.target.value })
            }
          />
          <p>
            Should be 6 digits at least{" "}
            {registerData.password1.length >= 6 ? (
              <i className="far fa-check-circle"></i>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="formControl">
          <label htmlFor="password2">Confirm Password </label>
          <input
            autoComplete="off"
            type="password"
            id="password2"
            name="password2"
            value={registerData.password2 || ""}
            onChange={(e) =>
              setRegisterData({ ...registerData, password2: e.target.value })
            }
          />
          <p>
            Should match the first password{" "}
            {registerData.password1 === registerData.password2 &&
            registerData.password1.length >= 6 ? (
              <i className="far fa-check-circle"></i>
            ) : (
              ""
            )}
          </p>
        </div>
        <Link to="/login">You have an account ?</Link>

        <button>Register</button>
      </form>
    </section>
  );
}

export default RegisterForm;
