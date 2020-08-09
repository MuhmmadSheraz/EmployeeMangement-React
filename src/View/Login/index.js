import React, { useState } from "react";
import swal from "sweetalert";
import "../Login/login.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  let updateEmail = (e) => {
    let currentValue = e.target.value;
    setEmail(currentValue);
  };
  let updatePassword = (e) => {
    let currentValue = e.target.value;
    setPassWord(currentValue);
  };

  return (
    <div className="mainWrapper">
      <div className="container1">
        <h1 className="signInHeading">Sign In Here</h1>

        <input
          className="emailInput"
          type="email"
          placeholder="Enter Email"
          onChange={updateEmail}
          
        />
        <br />
        <input
          className="passwordInput"
          type="passoword"
          placeholder="Enter PassWord"
          onChange={updatePassword}
          
        />
        <br />
        <button
          className="signInBtn"
          onClick={() => props.updateUser({ email, passWord })}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
