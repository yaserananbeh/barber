import React, { useState } from "react";
import "../style/UserInfo.scss";
import LogoutBtn from "../components/LogoutBtn";

function UserInfo() {
  const [loggedUser] = useState(
    localStorage.getItem("loggedInUser")
      ? JSON.parse(localStorage.getItem("loggedInUser"))
      : {}
  );

  return (
    <div className="userInfoMainContainer">
      <div className="container">
        <div className="col imageCol">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profilepic"
          />
        </div>
        <div className="col infoContainer">
          <h2>Personal Info</h2>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            defaultValue={loggedUser.username || ""}
            disabled
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={loggedUser.email || ""}
            disabled
          />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            defaultValue={loggedUser.password1 || ""}
            disabled
          />
          <LogoutBtn />

          <br />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
