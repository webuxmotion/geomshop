import { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FormInput, Button } from '../../components';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';

class Signin extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    
    emailSignInStart(email, password);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart, userError } = this.props;
    const { email, password } = this.state;

    return (<div className="g-container">
      <h2 className="g-mb-2">Sign in</h2>
      { userError && <p>{userError}</p>}
      <form>
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
        <Button type="button" onClick={this.handleSubmit}>Sign ind</Button>
        <span className="g-ml-2">
          <Button 
            type="button"
            onClick={googleSignInStart}
            theme="google-signin"
          >Sign in with Google</Button>
        </span>
      </form>
    </div>)
  }
}

const mapStateToProps = createStructuredSelector({
  userError: selectUserError
})

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
