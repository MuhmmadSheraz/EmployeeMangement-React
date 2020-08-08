import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./form.css";
function FormEmployee() {
  return (
    <div className="mainWrapperForm">
      <div className="container Form_Content ">
        <h1 className="text-center text-light mb-4">Add Employee Data</h1>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Label className="text-light">First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label className="text-light">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="text-light">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group controlId="salary">
            <Form.Label className="text-light">Salary</Form.Label>
            <Form.Control type="number" placeholder="Enter Salary" />
          </Form.Group>
          <Form.Group controlId="currentDate">
            <Form.Label className="text-light">Job Start Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>

          <Button variant="success">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
export default FormEmployee;
