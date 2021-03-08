import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink exact to="/" activeStyle={{ color: "red" }}>
        Home
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <NavLink to="/register" activeStyle={{ color: "red" }}>
        SignUp
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <NavLink to="/login" activeStyle={{ color: "red" }}>
        Login
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <NavLink to="/aboutus" activeStyle={{ color: "red" }}>
        About Us
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <NavLink to="/contactus" activeStyle={{ color: "red" }}>
        Contact Us
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <NavLink to="/careers" activeStyle={{ color: "red" }}>
        Careers
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <NavLink to="/employees" activeStyle={{ color: "red" }}>
        All Employees
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <NavLink to="/addEmployee" activeStyle={{ color: "red" }}>
        Add Employee
      </NavLink>
      &nbsp;&nbsp;|&nbsp;
      <br></br>
      <br></br>
    </>
  );
};

export default NavBar;
