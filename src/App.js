import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Your journey begins here...</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
