import React, { useState, useEffect } from "react";

const Form = props => {


  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {

    return setMember(props.memberToEdit);
  },[props.memberToEdit]);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });

  };
  const submitForm = event => {
    event.preventDefault(); // updates the state
    props.newMember(member);
    setMember({ name: "", email: "" });

  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        placeholder="Enter Your Name Here"
        type="text"
        name="name"
        onChange={handleChange}
        value={member.name} 
      />

      <label htmlFor="role">  Role </label>
      <select
        id="role"
        type="text"
        name="role"
        onChange={handleChange}
        value={member.role}>
          <option value="">Select Your Purpose</option>
          <option value="I am a Front End Developer">Front End Developer</option>
          <option value="I am a Backend Developer">Backend Developer</option>
          <option value="I do Full Stack">Full Stack Web Developer</option>
          <option value="I am with the Resistance">Resistance Fighter</option>
          <option value="Imperialist 4 life!">Stormtrooper</option>
          <option value="I don't really work here anymore">That's My Stapler</option>
        </select>

      <label htmlFor="email">  Email </label>
      <input type = "email"
        id="email"
        placeholder="Enter Your Email Address"
        name="email"
        onChange={handleChange}
        value={member.email}
      />

      <button type="submit">Add A Team Member</button>
    </form>
  );
};

export default Form; 



