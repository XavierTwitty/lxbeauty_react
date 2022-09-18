import React, { useContext } from "react";
import { TrainingContext } from "../contexts/trainingContext";

import Training from "./Training";

const Trainings = () => {
  const trainings = useContext(TrainingContext);
  console.log(trainings);
  return (
    <section
      className="training-container"
      style={{
        border: "solid blue 2px",
      }}
    >
      {trainings.map((training) => {
        return <Training trainings={training} />;
      })}
    </section>
  );
};

export default Trainings;
