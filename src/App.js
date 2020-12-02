import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { HomePage, ShopPage, SigninPage } from './pages';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SigninPage} />
      </Switch>
    </>
  );
}

export default App;
