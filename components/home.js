import React from "react";

function home() {
  return (
    <section
      style={{
        backgroundColor: "pink",
      }}
      id="homepage"
    >
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img
            src="https://images.unsplash.com/photo-1624984675609-a08fb0404db0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="eyelash picture"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "2%",
        }}
      >
        <h3>Making beauty personal</h3>
        <button className="home-button"> Explore </button>
      </div>
    </section>
  );
}

export default home;
