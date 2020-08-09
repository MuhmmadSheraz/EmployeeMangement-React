import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function EditBtn(props) {
  return <button className="btn btn-warning" onClick={props.click}>{props.text}</button>;
}
export default EditBtn;
