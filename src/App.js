import React from 'react';
import './App.css';
import Header from './components/header/Header';
import LoginPage from './components/loginPage/LoginPage';
import SignupPage from './components/signupPage/SignupPage';
import Routes from './Routes/Routes';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes />
      </div>
  );
}

export default App;
