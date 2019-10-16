import React, { useState, useEffect } from "react";

const Form = props => {


  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {


  if (props.memberToEdit.id)

  setMember(props.memberToEdit);


  },[props.memberToEdit]);
  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });

  };
  const submitForm = event => {
    event.preventDefault();
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



// - Pass `memberToEdit` down to `Form.js`
// - If `Form` receives `props.memberToEdit`, then that member object should populate your state object that is controlling your forms. Now, it may be tempting to do something like this: `const [member, setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})` for our form to update with whatever member we click on. However, this is a trap that will cause a pretty big bug in our app. If props are used to set state like this, the state property will _NOT_ update when the prop changes. So... what kind of technique have we learned to keep something in sync with props when they change? `useEffect`! Write an effect that syncs with `props.memberToEdit`. When `props.memberToEdit` changes, the effect will update the `member` state object with the new data. This will populate the inputs with whichever member we are trying to update.

// The flow for editing is hard to conceptualize. It should go something like this:

// 1. Our user clicks the `Edit` button/icon to start editing a team member
// 1. A function in App is invoked that sets the clicked member to `memberToEdit` on state
// 1. `Form.js` is receiving `memberToEdit` as a prop, and if that prop changes, the effect we built will set that object to state and populate the form with that member's info
// 1. The user updates the member info
// 1. Uh... now what do we do with this new data? If we submit the form, it will just add a new member 😫. Never fear! We will fix this in the next section!