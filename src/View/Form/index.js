import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import UpdateBtn from "../../Components/UpdateButton";
import "./form.css";
function FormEmployee(props) {
  const [updateBtn, setUpdateBtn] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("han bj");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  let inpName = (e) => {
    let input = e.target.value;
    setName(input);
  };
  let inpLastName = (e) => {
    let input = e.target.value;
    setLastName(input);
  };
  let inpEmail = (e) => {
    let input = e.target.value;
    setEmail(input);
  };
  let inpSalary = (e) => {
    let input = e.target.value;
    setSalary(input);
  };
  let inpDate = (e) => {
    let input = e.target.value;
    // console.log(input);
    setDate(input);
  };

  return (
    <div className="mainWrapperForm">
      <div className="container Form_Content ">
        <h1 className="text-center text-light mb-4">Add Employee Data</h1>
        <Form onSubmit={e => e.preventDefault()}>
          <Form.Group controlId="firstName">
            <Form.Label className="text-light">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name "
              onChange={inpName}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label className="text-light">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              onChange={inpLastName}
              value="han bhai kaisa dia"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="text-light">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={inpEmail}
            />
          </Form.Group>
          <Form.Group controlId="salary">
            <Form.Label className="text-light">Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Salary"
              onChange={inpSalary}
            />
          </Form.Group>
          <Form.Group controlId="currentDate">
            <Form.Label className="text-light">Job Start Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              onChange={inpDate}
            />
          </Form.Group>
          {props.isUpdatable ? (
            <Button
            variant="success"
            onClick={() =>
              props.updateData({ name, lastname, email, salary, date })
            }
          >
            Update
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() =>
                props.renderDashbaord({ name, lastname, email, salary, date })
              }
            >
              Submit
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
}
export default FormEmployee;
