import React, { useState } from "react";
import Login from "../src/View/Login";
import swal from "sweetalert";
import EmployeeTable from "./View/EmployeeTable";
import FormEmployee from "./View/Form";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [addform, setAddForm] = useState("");
  const [tableUpdated, settableUpdated] = useState([]);

  let showForm = () => {
    setAddForm(true);
    console.log("show Form");
  };
  let renderDashbaord = (obj) => {
    setAddForm(false);
    let arr=[...tableUpdated]
    arr.push(obj)
    settableUpdated(arr)
    
  };
  let updateUser = (obj) => {
    if (obj.email == "admin@domain.com" && obj.passWord == "admin") {
      swal({
        title: "Signed In Successfully",
        icon: "success",
      });
      setUser(true);
    } else {
      swal({
        title: "Wrong Credentials",
        icon: "error",
      });
    }
    console.log(obj);
  };
  return (
    <>
      {!user && <Login updateUser={updateUser} />}

      {user && !addform && <EmployeeTable showForm={showForm} data={tableUpdated} />}

      {user && addform && <FormEmployee renderDashbaord={renderDashbaord} />}
    </>
  );
}

export default App;
