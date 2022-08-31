import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../data";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Services from "../components/Services";
import Navigation from "./Navigation";
import { ServiceContext } from "../contexts/ServiceContext";

function App() {
  const [services] = useState(data);

  return (
    <div className="App">
      <ServiceContext.Provider value={{ services }}>
        <h1> LX BEAUTY </h1>

        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
