import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form style={{ width: "40%" }}>
        <div className="form-group">
          <label className="form-label">Email: </label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Password: </label>
          <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}

export default Login;
