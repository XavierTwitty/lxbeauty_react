import React, { useContext, useState } from "react";
import { TrainingContext } from "../contexts/TrainingContext";
import Form from "./Form";
import Trainee from "./Trainee";
import Training from "./Training";

const Trainings = () => {
  const trainings = useContext(TrainingContext);
  // console.log(trainings);

  const [trainees, setTrainees] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
  ]);

  console.log(trainees);
  return (
    <div>
      <div className="training-header">
        <h2> One Day & Two Day</h2>
        <h2> Classic Lash</h2>
        <h2>
          {" "}
          Extension Classes <span>with Lauren Isenberger</span>
        </h2>
      </div>
      <section className="training-container">
        {trainings.map((training) => {
          return <Training trainings={training} />;
        })}
      </section>
      <div className="form-container">
        <h2>For more information, fill out the form below</h2>
        <Form trainees={trainees} setTrainees={setTrainees} />
        {trainees.map((trainee) => (
          <Trainee trainee={trainee} />
        ))}
      </div>
    </div>
  );
};

export default Trainings;
