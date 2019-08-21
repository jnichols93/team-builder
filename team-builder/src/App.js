import React from 'react';

import './App.css';
import Form from './components/form';
import TeamList from './components/teamList';

function App() {
 
  
  return (
    <div className="App">
      <header className="appHeader">
      <h1>meet the team</h1>
      </header>
      <Form/>
      <TeamList/>


      
    </div>
  );
}

export default App;
