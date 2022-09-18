import React, { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceContext";

import Service from "./Service";

const Services = () => {
  const services = useContext(ServiceContext);
  console.log(services);
  return (
    <div
      className="service-container"
      style={{
        border: "solid red 2px ",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "60rem",
      }}
    >
      {services.map((service) => {
        return <Service services={service} />;
      })}
    </div>
  );
};

export default Services;
