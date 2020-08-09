import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./form.css";
function FormEmployee(props) {
  
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
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
    console.log(input);
    setDate(date);
  };

  return (
    <div className="mainWrapperForm">
      <div className="container Form_Content ">
        <h1 className="text-center text-light mb-4">Add Employee Data</h1>
        <Form>
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
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>

          {/* <Button variant="success" onClick={()=>showData({name,lastname,email,salary,date})}>Submit</Button> */}
          <Button
            variant="success"
            onClick={() =>
              props.renderDashbaord({ name, lastname, email, salary, date })
            }
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default FormEmployee;
