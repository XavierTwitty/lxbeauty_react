import React, { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceContext";

import Service from "./Service";

const Services = () => {
  const services = useContext(ServiceContext);
  console.log(services);
  return (
    <section
      className="service-container"
      style={{
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
    </section>
  );
};

export default Services;
