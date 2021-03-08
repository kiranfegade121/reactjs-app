import React, { Component } from "react";
import axios from "axios";
import { Prompt } from "react-router-dom";

class AddEmployee extends Component {
  //   constructor(props) {
  //     super(props);
  //     console.log("Inside AddEmployee constructor");
  //   }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("Inside getDerivedStateFromProps method");
  //     return null;
  //   }

  //   componentDidMount() {
  //     console.log("Inside componentDidMount() method");
  //   }

  state = {
    employee: {},
    isFormFilled: false
  };

  handleChange = event => {
    this.setState({ isFormFilled: true });
    const employee = { ...this.state.employee };
    employee[event.target.name] = event.target.value;
    this.setState({ employee });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.setState({ isFormFilled: false });
    axios
      .post("http://localhost:8080/api/v1/employees", this.state.employee)
      .then(response => {
        // console.log(response);
        this.props.history.push("/employees");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log("Inside render() method");
    const { isFormFilled } = this.state;
    return (
      <>
        <Prompt
          when={isFormFilled}
          message="Are you sure you want to leave this page?"
        />
        <form style={{ width: "40%" }} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="form-label">Employee Id: </label>
            <input
              type="number"
              name="employeeId"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Employee name: </label>
            <input
              type="text"
              name="employeeName"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Employee department: </label>
            <input
              type="text"
              name="employeeDepartment"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Employee salary: </label>
            <input
              type="number"
              name="employeeSalary"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </>
    );
  }
}

export default AddEmployee;
