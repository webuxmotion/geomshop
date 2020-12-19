import { useState } from 'react';

import { FormInput, Button } from '../../components';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Signup = ({ signUpStart, userError }) => {
  const [credentials, setCredentials] = useState(initialState);
  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  }

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <div className="g-container">
      <h2 className="g-mb-2">Sign up</h2>
      { userError && <p>{userError}</p>}
      <form>
        <div className="g-mb-2">
          <FormInput
            label="Display Name"
            handleChange={handleChange}
            name="displayName"
            type="text"
            value={displayName}
            required
          />
        </div>
        <div className="g-mb-2">
          <FormInput
            label="Email"
            handleChange={handleChange}
            name="email"
            type="email"
            value={email}
            required
          />
        </div>
        <div className="g-mb-2">
          <FormInput
            label="Password"
            handleChange={handleChange}
            name="password"
            type="password"
            value={password}
            required
          />
        </div>
        <div className="g-mb-2">
          <FormInput
            label="Confirm Password"
            handleChange={handleChange}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
          />
        </div>
        <Button onClick={handleSubmit}>Sign up</Button>
      </form>
    </div>
  )
}

export default Signup;
