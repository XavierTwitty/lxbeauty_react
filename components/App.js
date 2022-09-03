import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../data";

import Home from "./Home";
import About from "./About";
// import Contact from "./contact";
import Services from "../components/Services";
import Navigation from "./Navigation";
import { ServiceContext } from "../contexts/ServiceContext";

// plan:
// take out the contact page and make training page
// make a footer component for the whole app
// on the taining page map state and make a form
// features : social media icons and live IG posts
//            Our servies nav from https://www.loxuriousbeauty.com/book-online?category=all-services

function App() {
  const [services, setService] = useState(data);

  return (
    <div className="App">
      <h1> LX BEAUTY </h1>

      <Navigation />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <ServiceContext.Provider value={services}>
            <Services />
          </ServiceContext.Provider>
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
