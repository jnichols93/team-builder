import React from 'react';
import logo from './logo.svg';
import './App.css';
import {teamList as List} from './components/teamList';
function App() {
  return (
    <div className="App">
      <h1>Team List</h1>
      <List/>
    </div>
  );
}

export default App;
