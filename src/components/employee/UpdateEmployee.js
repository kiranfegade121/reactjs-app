import React, { Component } from "react";
import axios from "axios";

class UpdateEmployee extends Component {
  state = {
    employee: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:8080/api/v1/employees/" + id)
      .then(response => {
        this.setState({ employee: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    const employee = { ...this.state.employee };
    employee[event.target.name] = event.target.value;
    this.setState({ employee });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put("http://localhost:8080/api/v1/employees", this.state.employee)
      .then(response => {
        this.props.history.push("/employees");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { employee } = this.state;

    return (
      <form style={{ width: "40%" }} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-label">Employee name: </label>
          <input
            type="text"
            name="employeeName"
            value={employee.employeeName}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Employee department: </label>
          <input
            type="text"
            name="employeeDepartment"
            value={employee.employeeDepartment}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Employee salary: </label>
          <input
            type="number"
            name="employeeSalary"
            value={employee.employeeSalary}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    );
  }
}

export default UpdateEmployee;
