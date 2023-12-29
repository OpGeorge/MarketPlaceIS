import React , { useState }from 'react';
import './LogInCassete.css';
import axios from 'axios';

function LogInCassete({ onLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    // Make a POST request to the authentication endpoint
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
      email: username, // Use 'email' instead of 'username'
      password,
      });

      // Assuming the backend returns a token upon successful login
      const authToken = response.data.token;
      console.log('Login successful! Token:', authToken);

      // You can save the token to the state, local storage, or a cookie for future requests
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure (e.g., show an error message to the user)
    }
  };

  const handleLoginClick = () => {
    // Perform login actions...
    onLogin(); // Call the onLogin function passed from App.js
  };

  return (
    <div>
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input type="text"
          placeholder="Username"
          className="input-field" id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button
          className="login-button"
          type="submit"
        >
          Login
        </button>
        <div className="signup-link">
          <p>Not a user yet? <a href="#">Just sign up</a></p>
        </div>
      </form>


      <button className="back-button" onClick={handleLoginClick}>
        &lt;
      </button>
      </div>
      </div>
  );

}

export default LogInCassete;