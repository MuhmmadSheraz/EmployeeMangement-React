import React from "react";
import "../EmployeeTable/employee.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";
import EditBtn from "../../Components/EditButton";


function EmployeeTable(props) {
  
  
  let remove = (index) => {
    props.delete(index);
  };
  let allEmployee = props.data;
  
  return (
    <div className="mainWrapperEmployee">
      <button
        className="floatingButton btn-lg btn btn-success rounded-circle"
        onClick={() => props.showForm()}
      >
        +
      </button>
      
      <h1 className="text-success text-center pt-3">
        Welcome {props.user.email}
      </h1>
      <Table striped bordered hover variant="dark">
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
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{x.name}</td>
                <td>{x.lastname}</td>
                <td>{x.email}</td>
                <td>{x.salary}</td>
                <td>{x.date}</td>
                <td>
                  <EditBtn text="Edit" click={() => props.editNow(index)} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => remove(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default EmployeeTable;
