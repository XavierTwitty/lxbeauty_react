import React from "react";

const Service = (props) => {
  const { id, title, hours, price } = props.services;

  console.log(props);
  return (
    <div className="service" key={id}>
      <h3 className="title">{title}</h3>
      <p className="hours">{hours}</p>
      <p className="price">{price}</p>
      <button
        onClick={() => {
          alert("Thank you for vistiting");
        }}
      >
        book now
      </button>
    </div>
  );
};
export default Service;
