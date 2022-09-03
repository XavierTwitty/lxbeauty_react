import React from "react";

function home() {
  return (
    <div className="homepage">
      <h1> Home page </h1>

      <section id="top">
        <div class="sub_header">
          <h3>Making beauty personal</h3>
          {/* add a slideshow */}
        </div>
      </section>
      {/* sample of the services before you go to service component */}

      <section id="bottom">
        <footer>
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
              Monday: closed <br />
              Tuesday: 11am - 7pm <br />
              Monday: 11am - 7pm <br />
              Monday: 11am - 7pm <br />
              Monday: 11am - 7pm <br />
              Monday: 11am - 7pm <br />
              Monday: closed <br />
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default home;
