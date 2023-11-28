import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={VendingMachine} />
          <Route path="/chips" component={Chips} />
          <Route path="/candy" component={Candy} />
          <Route path="/soda" component={Soda} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
