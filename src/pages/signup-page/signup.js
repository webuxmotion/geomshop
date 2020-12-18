import { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FormInput, Button } from '../../components';

import { signUpStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

class Signup extends Component {

  state = initialState;

  handleSubmit = () => {

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { userError } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    return (<div className="g-container">
      <h2 className="g-mb-2">Sign up</h2>
      { userError && <p>{userError}</p>}
      <form>
        <div className="g-mb-2">
          <FormInput
            label="Display Name"
            handleChange={this.handleChange}
            name="displayName"
            type="text"
            value={displayName}
            required
          />
        </div>
        <div className="g-mb-2">
          <FormInput
            label="Email"
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={email}
            required
          />
        </div>
        <div className="g-mb-2">
          <FormInput
            label="Password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={password}
            required
          />
        </div>
        <div className="g-mb-2">
          <FormInput
            label="Confirm Password"
            handleChange={this.handleChange}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
          />
        </div>
        <Button onClick={this.handleSubmit}>Sign up</Button>
      </form>
    </div>)
  }
}

const mapStateToProps = createStructuredSelector({
  userError: selectUserError
});

const mapDispatchToProps = dispatch => ({
  signUpStart: formData => dispatch(signUpStart(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
