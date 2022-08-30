import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import data from "../data";

import { serviceContext } from "../contexts/serviceContext";

// move these imports to nav component
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";

// maka a nav component
function App() {
  const [services] = useState(data);

  return (
    <div className="App">
      <serviceContext.Provider value={{ services }}>
        <h1> LX BEAUTY </h1>

        <nav>
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </serviceContext.Provider>
    </div>
  );
}

export default App;
