import React, { useState } from "react";
import swal from "sweetalert";
import "../Login/login.css";

function Login() {
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
  let signIn = () => {
    if (email == "admin@domain.com" && passWord == "admin") {
      swal({
        title: "Signed In Successfully",
        icon: "success",
      });
      console.log("Email======>", email);
      console.log("Password======>", passWord);
    }
    else{
        swal({
            title: "Wrong Credentials",
            icon: "error",
          });
    }
  };
  return (
    <div className="mainWrapper">
      <div className="container">
        <h1 className="signInHeading">Sign In Here</h1>
        <br />
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
        <button className="signInBtn" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
