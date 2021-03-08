import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import AllEmployees from "./components/employee/AllEmployees";
import UpdateEmployee from "./components/employee/UpdateEmployee";
import AddEmployee2 from "./components/employee/AddEmployee2";

class App extends Component {
  render() {
    return (
      <div className="container">
        <br></br>
        <br></br>
        <NavBar />
        <br></br>
        <br></br>
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/careers" component={Careers} />
          <Route path="/addEmployee" component={AddEmployee2} />
          <Route path="/employees" component={AllEmployees} />
          <Route path="/updateEmployee/:id" component={UpdateEmployee} />
          <Route exact path="/" component={Home} />
          <Redirect from="/refresh" to="/employees" />
          <Route
            component={() => {
              return <h5>OOPs, 404 Page Not Found</h5>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
