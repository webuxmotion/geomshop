import { Component } from 'react';

import { FormInput, Button } from '../../components';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''});
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (<div className="g-container">
      <h2 className="g-mb-2">I already have an account</h2>
      <form onSubmit={this.handleSubmit}>
        <div className="g-mb-2">
          <FormInput
            label="Email"
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
        </div>
        <div className="g-mb-2">
          <FormInput
            label="Password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          />
        </div>
        <Button type="submit">Sign in</Button>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </form>
    </div>)
  }
}

export default Signin;
