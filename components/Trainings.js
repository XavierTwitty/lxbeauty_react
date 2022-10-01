import React, { useContext, useState } from "react";
import { TrainingContext } from "../contexts/trainingContext";
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
      <div
        className="form-container"
        style={{
          backgroundColor: "pink",
          width: "100%",
          height: "40rem",
          border: "solid blue 2px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "2%",
          }}
        >
          For more information, fill out the form below
        </h1>
        <Form trainees={trainees} setTrainees={setTrainees} />
        {trainees.map((trainee) => (
          <Trainee trainee={trainee} />
        ))}
      </div>
    </div>
  );
};

export default Trainings;
