import React from "react";
import { NavLink } from "react-router";

const Headers = () => {
  return (
    <header>
      <nav className="border p-3">
        <NavLink className="btn" to="/">
          Home
        </NavLink>
        <NavLink className="btn" to="/addCoffee">
          Add Coffee
        </NavLink>
        <NavLink className="btn" to="/signin">
          Sign In
        </NavLink>
        <NavLink className="btn" to="/signUp">
          SignUp
        </NavLink>
        <NavLink className="btn" to="/users">
          User
        </NavLink>
        <NavLink className="btn" to="/profile">
          Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Headers;
