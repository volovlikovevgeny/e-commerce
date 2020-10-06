import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {

  const HatsPage = (props) => {

    return (
      <div>
        <h1>HATS PAGE</h1>
      </div>
    )
  }
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>

    </div>
  );
}

export default App;
