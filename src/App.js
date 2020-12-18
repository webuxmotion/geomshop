import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Header } from './components';
import { CheckoutPage, HomePage, ShopPage, SigninPage, SignupPage } from './pages';

import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SigninPage />
              )
            } 
          />
          <Route exact path='/signup' component={SignupPage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
