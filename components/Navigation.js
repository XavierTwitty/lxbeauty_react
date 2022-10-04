import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink className="links" to="/">
        Home
      </NavLink>
      <NavLink className="links" to="/services">
        services
      </NavLink>
      <NavLink className="links" to="/trainings">
        Training
      </NavLink>
      <NavLink className="links" to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
