import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from "./components/teammembers";
import Form from "./components/form";

function App() {
  
  const [members, setNewMembers] = useState([])
  const [editMembers, setEditMembers] = useState({});

  const members = member => {
    const members = {
      id: members.length,
      name: member.name,
      role: member.role,
      email: member.email
    };
    setNewMembers([...members, setNewMembers]);
  };

  const editMembers = (id) => {
    const newList = members.filter(member => {
      return member.id === id;
    });
    setEditMembers(newList);
  };

  const deleteMembers = (id) => {
    const newList = members.filter(member => {
      return member.id !== id;
    });
    setNewMembers(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <Form newMembers = {newMembers} memberToEdit = {editMembers} />
        <Members members = {members} deleteMembers = {deleteMembers} />
      </header>
    </div>
  );
}

export default App;
