import React, { Component } from "react";
import axios from "axios";

class AddEmployee2 extends Component {
  constructor() {
    super();
    this.id = React.createRef();
    this.name = React.createRef();
    this.department = React.createRef();
    this.salary = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    const employee = {
      employeeId: this.id.current.value,
      employeeName: this.name.current.value,
      employeeDepartment: this.department.current.value,
      employeeSalary: this.salary.current.value
    };

    axios
      .post("http://localhost:8080/api/v1/employees", employee)
      .then(response => {
        this.props.history.push("/employees");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <form style={{ width: "40%" }} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-label">Employee Id: </label>
          <input type="number" className="form-control" ref={this.id} />
        </div>
        <div className="form-group">
          <label className="form-label">Employee Name: </label>
          <input type="text" className="form-control" ref={this.name} />
        </div>
        <div className="form-group">
          <label className="form-label">Employee Department: </label>
          <input type="text" className="form-control" ref={this.department} />
        </div>
        <div className="form-group">
          <label className="form-label">Employee Salary: </label>
          <input type="number" className="form-control" ref={this.salary} />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    );
  }
}

export default AddEmployee2;
