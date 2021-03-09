import React, { Component } from "react";
import axios from "axios";

class AllEmployees extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios
      .get("/api/v1/employees")
      .then(response => {
        this.setState({ employees: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete = id => {
    axios
      .delete("/api/v1/employees/" + id)
      .then(response => {
        this.props.history.push("/refresh");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleEdit = id => {
    this.props.history.push("/updateEmployee/" + id);
  };

  render() {
    const { employees } = this.state;
    if (employees.length === 0) {
      return <h5>No Employee records to display</h5>;
    } else {
      return (
        <table className="table table-bordered">
          <thead className="thead thead-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => {
              return (
                <tr>
                  <td>{employee.employeeId}</td>
                  <td>{employee.employeeName}</td>
                  <td>{employee.employeeDepartment}</td>
                  <td>{employee.employeeSalary}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={this.handleEdit.bind(this, employee.employeeId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={this.handleDelete.bind(
                        this,
                        employee.employeeId
                      )}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
}

export default AllEmployees;
