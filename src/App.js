import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Create from "./components/Create";
import Start from "./components/Start";
import CreateForm from './components/CreateForm';
import Dashboard from "./components/Dashboard";

import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/create-form" exact component={CreateForm} />
          <Route path="/start" exact component={Start} />
          <Route path="/battle/:name" exact component={Battle} />
          <Route path="/dashboard/:name" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;