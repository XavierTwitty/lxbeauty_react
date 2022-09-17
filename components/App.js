import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../data";
import trainingData from "../trainingData";

import Home from "./Home";
import About from "./About";
import Trainings from "./Trainings";
import Services from "../components/Services";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ServiceContext } from "../contexts/ServiceContext";
import { TrainingContext } from "../contexts/trainingContext";

// plan:
// features : social media icons and live IG posts
//            Our servies filter from https://www.loxuriousbeauty.com/book-online?category=all-services

function App() {
  const [services, setService] = useState(data);
  const [trainings, setTrainings] = useState(trainingData);

  // var slideIndex = 0;
  // showSlides();

  // function showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   setTimeout(showSlides, 5000); // Change image every 2 seconds

  //   useEffect(() => {
  //     showSlides();
  //   }, []);
  // }

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
