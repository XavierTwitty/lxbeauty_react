import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header-container">
      <div className="titles">
        <h1> Loxurious Beauty </h1>
        <h2>
          Lashes, brows &<br />
          permanent make-up
        </h2>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
