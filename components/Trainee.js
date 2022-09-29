import React from "react";

export default function Trainee(props) {
  const { trainee } = props;

  return (
    <div>
      <p>{trainee.firstName}</p>
      <p>{trainee.lastName}</p>
      <p>{trainee.email}</p>
      <p>{trainee.role}</p>
    </div>
  );
}
