import React, { useContext } from "react";
import { TrainingContext } from "../contexts/trainingContext";

import Training from "./Training";

const Trainings = () => {
  const trainings = useContext(TrainingContext);
  console.log(trainings);
  return (
    <div className="training-container">
      {trainings.map((training) => {
        return <Training trainings={training} />;
      })}
    </div>
  );
};

export default Trainings;
