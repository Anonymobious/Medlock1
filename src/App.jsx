import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import MediMate from './Components/Medimate';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/medimate" component={MediMate} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
