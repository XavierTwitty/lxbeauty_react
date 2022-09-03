import React, { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceContext";

import Service from "./Service";

const Services = () => {
  const services = useContext(ServiceContext);
  console.log(services);
  return (
    <div className="service-container">
      {services.map((service) => {
        return (<Service services={service} />)
      })}
    </div>
  );
};

export default Services;
