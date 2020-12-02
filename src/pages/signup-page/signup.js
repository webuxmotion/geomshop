import { Component } from 'react';

import { FormInput, Button } from '../../components';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

class Signup extends Component {

  state = initialState;

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, { displayName });

      this.setState(initialState);
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (<div className="g-container">
      <h2 className="g-mb-2">Sign up</h2>
      <form onSubmit={this.handleSubmit}>
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
        <Button type="submit">Sign up</Button>
      </form>
    </div>)
  }
}

export default Signup;
