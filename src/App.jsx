import React from 'react';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';

import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shoppage' component={Shoppage} />
      </Switch>

    </div>
  );
}

export default App;
