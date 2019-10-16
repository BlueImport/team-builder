import './App.css';
import React, { useState } from "react";
import Members from "./components/teammembers";
import Form from "./components/form";



function App() {
  const [members, setMembers] = useState([])
  const [memberToEdit, SetMemberToEdit] =useState({name: "", email: ""});

  const newMember = member => {
    const newMember = {
      id: members.length,
      name: member.name,
      email:member.email,
      role: member.role

    };
    setMembers([...members, newMember]);
  };

  const editMember = (memberToAdd )=> {
    SetMemberToEdit(memberToAdd) 
      return memberToAdd;
    };
  

  const deleteMember = (id )=> {
    const newArray = members.filter(member => {
      return member.id !== id;
    });

    setMembers(newArray);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form newMember={newMember} memberToEdit={memberToEdit} />
      <Members members={members} deleteMember={deleteMember} editMember={editMember} />

    </div>
  );
}


export default App;

