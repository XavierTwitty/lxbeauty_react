import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">services</NavLink>
      <NavLink to="/training">Training</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Navigation;
