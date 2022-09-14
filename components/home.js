import React from "react";

function home() {
  return (
    <div className="homepage">
      <h1> The Home of Beauty </h1>

      <section id="top">
        <div class="sub_header">
          <h3>Making beauty personal</h3>
          <div class="slideshow-container">
            <div class="mySlides fade">
              <img
                src="https://images.unsplash.com/photo-1624984675609-a08fb0404db0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="eyelash picture"
              />
            </div>
            <div class="mySlides fade">
              <img
                src="https://images.unsplash.com/photo-1522390108011-5f8667fd551d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="eyelash picture"
              />
            </div>
            <div class="mySlides fade">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="eyelash picture"
              />
            </div>
            <div class="mySlides fade">
              <img
                src="https://images.unsplash.com/photo-1512413316925-fd4b93f31521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="eyelash picture"
              />
            </div>
          </div>
        </div>
      </section>
      {/* sample of the services before you go to service component */}
    </div>
  );
}

export default home;
