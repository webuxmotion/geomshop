import { Component } from 'react';

import { FormInput, Button } from '../../components';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: '', password: ''});
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (<div className="g-container">
      <h2 className="g-mb-2">Sign in</h2>
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
        <span className="g-ml-2">
          <Button onClick={signInWithGoogle} theme="google-signin">Sign in with Google</Button>
        </span>
      </form>
    </div>)
  }
}

export default Signin;
