import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { HomePage, ShopPage } from './pages';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
