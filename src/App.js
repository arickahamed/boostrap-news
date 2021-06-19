import React from 'react';
import './App.css';
import Headlines from './components/Headlines/Headlines';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  return (
    <div>
        <NavBar></NavBar>
        <h2 className="text-primary text-center">React-Bootstrap will do all the work for us.</h2>
        <Headlines></Headlines>
    </div>
  );
}

export default App;
