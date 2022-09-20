import React, { useContext } from "react";
import { TrainingContext } from "../contexts/trainingContext";

import Training from "./Training";

const Trainings = () => {
  const trainings = useContext(TrainingContext);
  console.log(trainings);
  return (
    <div>
      <div
        className="training-header"
        style={{
          backgroundColor: "pink",
          width: "100%",
          height: "36rem",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2> One Day & Two Day</h2>
        <h2> Classic Lash</h2>
        <h2>
          {" "}
          Extension Classes{" "}
          <span
            style={{
              fontFamily: "cursive",
              fontSize: "3rem",
            }}
          >
            with Lauren Isenberger
          </span>
        </h2>
      </div>
      <section
        className="training-container"
        style={{
          border: "solid blue 2px",
          width: "100%",
          height: "70rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {trainings.map((training) => {
          return <Training trainings={training} />;
        })}
      </section>
      <form></form>
    </div>
  );
};

export default Trainings;
