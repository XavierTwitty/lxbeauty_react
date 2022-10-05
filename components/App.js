import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../data";
import trainingData from "../trainingData";

import Home from "./home";
import About from "./About";
import Trainings from "./Trainings";
import Services from "../components/Services";
import Header from "./Header";
import Footer from "./Footer";
import { ServiceContext } from "../contexts/ServiceContext";
import { TrainingContext } from "../contexts/trainingContext";

// plan:
// features : social media icons and live IG posts
//            Our servies filter from https://www.loxuriousbeauty.com/book-online?category=all-services
//            Animations
//            Booking component

function App() {
  const [services, setService] = useState(data);
  const [trainings, setTrainings] = useState(trainingData);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <ServiceContext.Provider value={services}>
            <Services />
          </ServiceContext.Provider>
        </Route>
        <Route path="/trainings">
          <TrainingContext.Provider value={trainings}>
            <Trainings />
          </TrainingContext.Provider>
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
