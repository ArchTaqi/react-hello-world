import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
        <p>
          Welcome All Buddies to Buddy Webinar!!!
        </p>
                <p>REACT_APP_MY_ENV_VARIABLE: {process.env.REACT_APP_MY_ENV_VARIABLE}</p>
      </header>
    </div>
  );
}

export default App;
