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
      onSubmit={(event) => {
        event.preventDefault();
        props.setTrainees([...props.trainees, form]);
        setForm({ firstName: "", lastName: "", email: "", role: "" });
        console.log("post submited", props.trainees);
      }}
    >
      <label htmlFor="firstName"> firstName: </label>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={form.firstName}
        onChange={changeHandler}
      />
      <label htmlFor="lastName"> lastName: </label>
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={form.lastName}
        onChange={changeHandler}
      />
      <label htmlFor="email"> Email: </label>
      <input
        type="email"
        name="email"
        placeholder="Enter Email Here"
        value={form.email}
        onChange={changeHandler}
      />
      <label htmlFor="role" />
      <select name="role" onChange={changeHandler}>
        <option value="one_day"> One Day Classic Lash </option>
        <option value="two_day"> Two Day Classic Lash </option>
      </select>
      <button type="submit"> Submit </button>
    </form>
  );
};
export default Form;
