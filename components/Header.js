import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header-container">
      <div
        style={{
          display: "flex",
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

        <Navigation />
      </div>
      <h2>
        Lashes, brows &<br />
        permanent make-up
      </h2>
    </div>
  );
}

export default Header;
