import React from "react";
import "../EmployeeTable/employee.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";
let date = new Date().toLocaleDateString();
function EmployeeTable() {
  return (
    <div className="mainWrapperEmployee">
      <button className="floatingButton btn-lg btn btn-success rounded-circle">+</button>
      <div className="container">
        <h1 className="text-success text-center pt-3">Welcome Your Email</h1>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Job Start Date</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mshazy999@gmail.com</td>
              <td>Rs 50000</td>
              <td>{new Date().toLocaleDateString()}</td>
              <td><button className="btn btn-primary">Edit</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default EmployeeTable;
