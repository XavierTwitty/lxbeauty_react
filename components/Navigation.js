import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">services</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Navigation;