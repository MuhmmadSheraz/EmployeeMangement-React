import React from "react";
import "../EmployeeTable/employee.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";

function EmployeeTable(props) {
  let allEmployee = props.data;
  return (
    <div className="mainWrapperEmployee">
      <button
        className="floatingButton btn-lg btn btn-success rounded-circle"
        onClick={() => props.showForm()}
      >
        +
      </button>
      <div className="container">
        <h1 className="text-success text-center pt-3">Welcome Your Email</h1>
        <Table  striped bordered hover variant="dark">
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
            {allEmployee.map((x, index) => {
              return(<tr>
                <td>{index + 1}</td>
                <td>{x.name}</td>
                <td>{x.lastname}</td>
                <td>{x.email}</td>
                <td>{x.salary}</td>
                <td>{x.date}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>)
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default EmployeeTable;
