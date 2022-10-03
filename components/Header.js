import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div
      className="header-container"
      style={{
        display: "flex",
        width: "100%",
        height: "20rem",
        marginTop: "3%",
      }}
    >
      <div
        className="titles"
        style={{
          width: "50%",
          textAlign: "center",
        }}
      >
        <h1
          className="h1"
          style={{
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: "5rem",
          }}
        >
          {" "}
          Loxurious Beauty{" "}
        </h1>
        <h2
          style={{
            fontFamily: "fantasy",
          }}
        >
          Lashes, brows &<br />
          permanent make-up
        </h2>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
