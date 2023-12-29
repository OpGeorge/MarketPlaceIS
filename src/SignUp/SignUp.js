import React, { useState,useEffect } from 'react';
import './SignUp.css';
import axios from 'axios';


function SignUp({ onSignUp }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/signup', {
        email,
        firstName,
        lastName,
        password,
      });

      const authToken = response.data.token;
      console.log('Sign Up successful! Token:', authToken);

      // Handle the token as needed (e.g., save to state, local storage)
    } catch (error) {
      console.error('Sign Up failed:', error.message);
      // Handle Sign Up failure
    }
  };

  const handleSignUpClick = () => {
    // Perform sign-up actions...
    onSignUp(); // Call the onSignUp function passed from another component
  };

  const handleBackClick = () => {
    // Perform actions when the back button is clicked
    handleSignUpClick(); // This is an example; adjust it as needed
  };



  useEffect(() => {
    // Apply the class to the body element when the component mounts
    document.body.classList.add('body-signup');

    // Clean up - remove the class when the component unmounts
    return () => {
      document.body.classList.remove('body-signup');
    };
  }, []);



  return (
    <div >
    <div className="signup-container">
        {/* Back button */}
        <button className="back-signup" onClick={handleBackClick}>
        &lt;
      </button>
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          className="input-field"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input-field"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-button" type="submit">
          Sign Up
        </button>
        <div className="login-link">
          <p>Already a user? <button onClick={handleSignUpClick}>Log in</button></p>
        </div>
      </form>
      </div>
      </div>
  );
}

export default SignUp;