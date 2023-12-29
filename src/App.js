import './App.css';
import HomePage from './home/HomePage';
import LogInCassete from './LogIn/LogInCassete'
import React, { useState } from 'react';
import SignUp from './SignUp/SignUp';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  return (
    <div className="App">
      {/* {isLoggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <LogInCassete onLogin={handleLogin} />
      )} */}
      {/* <SignUp onLogin={handleLogout} /> */}
     <HomePage />
    </div>
  );
}

export default App;
