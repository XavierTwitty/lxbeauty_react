import React from "react";

const Training = (props) => {
  const { id, title, p1, p2, p3, hours, price } = props.trainings;

  console.log(props);
  return (
    <div className="training" key={id}>
      <h1 className="training-title">{title}</h1>
      <p className="p1">{p1}</p>
      <p className="p2">{p2}</p>
      <p className="p3">{p3}</p>
      <p className="training-hours">{hours}</p>
      <p className="training-price">{price}</p>
    </div>
  );
};

export default Training;
