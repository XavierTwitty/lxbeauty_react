import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className="navigation"
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
      }}
    >
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
