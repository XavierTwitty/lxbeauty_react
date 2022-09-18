import React from "react";

const Service = (props) => {
  const { id, title, hours, price } = props.services;

  console.log(props);
  return (
    <div
      className="service"
      key={id}
      style={{
        width: "30%",
        height: "20%",
        textAlign: "center",
        border: "solid red 1px",
      }}
    >
      <h3 className="title">{title}</h3>
      <p className="hours">{hours}</p>
      <p className="price">{price}</p>
      <button>book now</button>
    </div>
  );
};
export default Service;
