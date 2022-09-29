import React from "react";

const Training = (props) => {
  const { id, title, p1, p2, p3, hours, price, license } = props.trainings;
  console.log(props);

  return (
    <div
      className="training"
      key={id}
      style={{
        border: "solid red 1px",
        width: "40%",
        textAlign: "center",
        margin: "2%",
        justifyContent: "center",
        marginLeft: "8%",
        marginRight: "8%",
      }}
    >
      <h2
        className="training-title"
        style={{
          fontSize: "6rem",
        }}
      >
        {title}
      </h2>
      <p className="p1">{p1}</p>
      <p className="p2">{p2}</p>
      <p className="p3">{p3}</p>
      <p
        className="training-hours"
        style={{
          fontSize: "2.3rem",
          fontWeight: "bold",
        }}
      >
        {hours}
      </p>
      <p
        className="training-price"
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        {price}
      </p>
      <p classname="license">{license}</p>
    </div>
  );
};

export default Training;
