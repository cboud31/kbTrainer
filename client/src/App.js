import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import App Pages
import { NavBar } from '../src/components/Home';
import { Home, Exercises } from './components/pages';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/exercises" component={Exercises} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
