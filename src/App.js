import React, { useState } from "react";
import Login from "../src/View/Login";
import swal from "sweetalert";
import EmployeeTable from "./View/EmployeeTable";
import FormEmployee from "./View/Form";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [updateIndex, setUpdateIndex] = useState("");
  const [addform, setAddForm] = useState("");
  const [tableUpdated, settableUpdated] = useState([]);
  const [isUpdatable, setIsUpdatable] = useState(false);

  let updateData = (obj) => {
    console.log(obj);

    let arr = [...tableUpdated];
    arr[updateIndex] = obj;
    console.log(tableUpdated);
    settableUpdated(arr);
    console.log(tableUpdated);
    console.log("Array============>", arr);
    setIsUpdatable(false);
    setAddForm(false);
  };
  let showForm = () => {
    setAddForm(true);
  };
  let editNow = (index) => {
    console.log(index);
    setAddForm(true);
    setUpdateIndex(index);

    setIsUpdatable(true);
  };
  let deleteNow = (index) => {
    let arr = [...tableUpdated];
    arr.splice(index, 1);
    settableUpdated(arr);
  };
  let renderDashbaord = (obj) => {
    setAddForm(false);
    let arr = [...tableUpdated];
    arr.push(obj);
    settableUpdated(arr);
    setIsUpdatable(false);
  };
  let updateUser = (obj) => {
    if (obj.email == "a" && obj.passWord == "a") {
      swal({
        title: "Signed In Successfully",
        icon: "success",
      });
      setUser(obj);
    } else {
      swal({
        title: "Wrong Credentials",
        icon: "error",
      });
    }
  };
  return (
    <>
      {!user && <Login updateUser={updateUser} />}

      {user && !addform && (
        <EmployeeTable
          showForm={showForm}
          data={tableUpdated}
          delete={deleteNow}
          user={user}
          editNow={editNow}
        />
      )}

      {user && addform && (
        <FormEmployee
          renderDashbaord={renderDashbaord}
          updateData={updateData}
          isUpdatable={isUpdatable}
        />
      )}
    </>
  );
}

export default App;
