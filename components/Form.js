import React, { useState } from "react";

const Form = (props) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  console.log(form);
  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form
      style={{
        height: "30rem",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        // props.setTrainees([...props.trainees, form]);
        setForm({ firstName: "", lastName: "", email: "", role: "" });
        console.log("post submited", props.trainees);
        alert("Thank you for submitting");
      }}
    >
      <div>
        <input
          style={{
            width: "40%",
            marginLeft: "30%",
            marginTop: "3%",
          }}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          style={{
            width: "40%",
            marginLeft: "30%",
          }}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          style={{
            width: "40%",
            marginLeft: "30%",
          }}
          type="email"
          name="email"
          placeholder="Enter Email Here"
          value={form.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <select
          style={{
            width: "40%",
            marginLeft: "30%",
          }}
          name="role"
          onChange={changeHandler}
        >
          <option value="one_day"> One Day Classic Lash </option>
          <option value="two_day"> Two Day Classic Lash </option>
        </select>
      </div>
      <button className="form-button" type="submit">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
};
export default Form;
