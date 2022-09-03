import React from "react";

const Service = (props) => {
  const { id, title, hours, price } = props.services;

  console.log(props);
  return (
    <div className="service" key={id}>
      <h1 className="title">{title}</h1>
      <p className="hours">{hours}</p>
      <p className="price">{price}</p>
    </div>
  );
};
export default Service;
