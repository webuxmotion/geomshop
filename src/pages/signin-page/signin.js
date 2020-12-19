import { useState } from 'react';

import { FormInput, Button } from '../../components';

const Signin = ({ emailSignInStart, googleSignInStart, userError }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();
    
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <div className="g-container">
      <h2 className="g-mb-2">Sign in</h2>
      { userError && <p>{userError}</p>}
      <form>
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
        <Button type="button" onClick={handleSubmit}>Sign in</Button>
        <span className="g-ml-2">
          <Button 
            type="button"
            onClick={googleSignInStart}
            theme="google-signin"
          >Sign in with Google</Button>
        </span>
      </form>
    </div>
  )
}

export default Signin;
