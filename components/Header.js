import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div
      className="header-container"
      style={{
        display: "flex",
        border: "solid red 2px",
        width: "100%",
        height: "25rem",
      }}
    >
      <h1
        style={{
          width: "50%",
          textAlign: "center",
          fontFamily: "fantasy",
          fontSize: "5rem",
        }}
      >
        {" "}
        LX BEAUTY{" "}
      </h1>
      <h2>
        Lashes, brows &<br />
        permanent make-up
      </h2>
      <Navigation />
    </div>
  );
}

export default Header;
