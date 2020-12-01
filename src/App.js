import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, ShopPage } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
