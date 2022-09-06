import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="left">
          <h3> location: </h3>
          <address>
            8501 Tower Point Dr <br />
            Suite c9A <br />
            Charlotte , North Carolina <br />
            28227
          </address>
        </div>

        <div className="right">
          <h2> Hours:</h2>

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
      </div>{" "}
    </div>
  );
};

export default Footer;
