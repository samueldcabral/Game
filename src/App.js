import React from 'react';
import './App.css';
import Warrior from './img/warrior.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This is a Game in development.
        </h1>
      </header>
      <h2>A quest to become the better card-dealer in history....</h2>
      <img src={Warrior} alt="Warrior" />
    </div>
  );
}

export default App;
