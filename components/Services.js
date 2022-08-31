import React, { useContext } from "react";

import Service from "./Service";
import { ServiceContext } from "../contexts/ServiceContext";

const Services = () => {
  const { services } = useContext(ServiceContext);
  return (
    <div className="service-container">
      {services.map((service) => {
        <Service key={service.id} service={service} />;
      })}
    </div>
  );
};

export default Services;
