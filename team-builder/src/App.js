import React, { useState } from "react";
import './App.css';
import TeamList from './components/teamList';
import TeamMemberForm from './components/form';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addNewTeamMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my Team Builder App</h1>
      </header>
      <TeamMemberForm addNewTeamMember={addNewTeamMember}/>
      <TeamList teamMemberList={teamMembers} />
    </div>
  );
}

export default App;