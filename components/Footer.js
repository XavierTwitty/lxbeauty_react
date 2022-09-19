import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "30rem",
      }}
    >
      <div
        className="left"
        style={{
          width: "40%",
          marginLeft: "8%",
          marginRight: "8%",
        }}
      >
        <h3> location: </h3>
        <address
          style={{
            marginBottom: "7%",
          }}
        >
          8501 Tower Point Dr <br />
          Suite c9A <br />
          Charlotte , North Carolina <br />
          28227
        </address>
        <div
          class="telNumber"
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              width: "24%",
            }}
          >
            {" "}
            Text or Call:{" "}
          </p>{" "}
          <a href="tel:1-704-254-0152"> 704-254-0152</a>
        </div>
      </div>

      <div
        className="right"
        style={{
          width: "40%",
          marginLeft: "8%",
          marginRight: "8%",
        }}
      >
        <h3> Hours:</h3>

        <p>
          Sunday: closed <br />
          Monday: 11am - 7pm <br />
          Tuesday: 11am - 7pm <br />
          Wednsday: 11am - 7pm <br />
          Thursday: 11am - 7pm <br />
          Friday: 11am - 7pm <br />
          Saturday: Closed <br />
        </p>
      </div>
    </div>
  );
};

export default Footer;
