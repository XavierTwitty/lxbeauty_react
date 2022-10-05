import React from "react";

const Training = (props) => {
  const { id, title, p1, p2, p3, hours, price, license } = props.trainings;
  console.log(props);

  return (
    <div className="training" key={id}>
      <h2 className="training-title">{title}</h2>
      <p className="p1">{p1}</p>
      <p className="p2">{p2}</p>
      <p className="p3">{p3}</p>
      <div className="training-hours">{hours}</div>
      <div className="training-price">{price}</div>
      <p classname="license">{license}</p>
    </div>
  );
};

export default Training;
