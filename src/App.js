import './App.css';
import React, { useState } from "react";
import Members from "./components/teammembers";
import Form from "./components/form";
import EditUserForm from "./components/editUserForm";



function App() {
  const [members, setMembers] = useState([])
  const initialFormState = { name: "", email: "", role:[0] }
  const [edit, setEdit] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = members => {
    setEdit(true)
    setCurrentUser(initialFormState)
  };

  const updateUser = (name, updatedUser) => {
    setEdit(false)
    setMembers(members.map(member =>(member.id ? updatedUser : member)))
  }

  const newMember = member => {
    const newMember = {
      id: members.length,
      name: member.name,
      email:member.email,
      role: member.role

    };
    setMembers([...members, newMember]);
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
      <Form newMember={newMember} memberToEdit={updateUser} />
      <Members members={members} deleteMember={deleteMember} editRow={editRow} />

    </div>
  );
}


export default App;

