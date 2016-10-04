import React, { Component } from 'react';
import './App.css';

import InputField from './InputField';

import UserIcon from 'react-icons/lib/fa/user';
import EmailIcon from 'react-icons/lib/fa/envelope-o';
import PasswordIcon from 'react-icons/lib/fa/lock';

import RegisterButton from './RegisterButton';

class App extends Component {

  componentDidMount() {
    document.body.style.backgroundColor = '#00BCD5';
  }

  render() {
    return (
      <div className="App">
        <div className="Register-container">
          <div className="Header">Register</div>
          <div className="Header-tag">Join our community now!</div>
          <InputField type="text" placeholder="Username" icon={UserIcon}/>
          <InputField type="email" placeholder="Email" icon={EmailIcon}/>
          <InputField type="password" placeholder="Password" icon={PasswordIcon}/>
          <InputField type="password" placeholder="Password again" icon={PasswordIcon}/>
          <RegisterButton />
        </div>
      </div>
    );
  }
}

export default App;
