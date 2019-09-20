import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Create from "./components/Create";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
