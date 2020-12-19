import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Signup from './signup';

import { signUpStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';

const SignupPage = props => (<Signup {...props} />);

const mapStateToProps = createStructuredSelector({
    userError: selectUserError
  });
  
  const mapDispatchToProps = dispatch => ({
    signUpStart: formData => dispatch(signUpStart(formData))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
