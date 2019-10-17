import './App.css';
import React, { useState } from "react";
import Members from "./components/teammembers";
import Form from "./components/form";
// import EditUserForm from "./components/editUserForm";



function App() {
  const [members, setMembers] = useState([])
  const [membersToEdit, setMemberToEdit] = useState([]);


  const newMember = member => {
    const newMember = {
      id: members.length,
      name: member.name,
      email:member.email,
      role: member.role

    };
    setMembers([...members, newMember]);
  };

  const editMember = (id) => {
    const newArray = members.filter(member => {
      return member.id !== id;
    })
  }

  const deleteMember = (id )=> {
    const newArray = members.filter(member => {
      return member.id !== id;
    });

    setMembers(newArray);
  };

  return (
    <div className="App">
      <h1 className="Header">Team Members</h1>
      <Form className="Form"
      newMember={newMember} 
      membersToEdit={membersToEdit} />
     <Members className="Info"
     members={members} 
     deleteMember={deleteMember} 
     editMember={editMember} />

    </div>
  );
}


export default App;

