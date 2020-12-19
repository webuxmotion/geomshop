import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Signin from './signin';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';

const SigninPage = props => (<Signin {...props} />);

const mapStateToProps = createStructuredSelector({
    userError: selectUserError
})

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
