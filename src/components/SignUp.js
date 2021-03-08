import React, { Component } from "react";

class SignUp extends Component {
  state = {
    user: {
      username: "",
      password: "",
      email: ""
    }
  };

  handleChange = event => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.user);
    // Make HTTP call and save new user into database.
    this.props.history.push("/login");
  };

  render() {
    return (
      <form style={{ width: "40%" }} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-label">Username: </label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email: </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password: </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    );
  }
}

export default SignUp;
