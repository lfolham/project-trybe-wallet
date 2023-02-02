import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (

    <Switch>
      <Route path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>

  );
}

export default App;
