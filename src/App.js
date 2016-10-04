import React, { Component } from 'react';
import UserIcon from 'react-icons/lib/fa/user';
import EmailIcon from 'react-icons/lib/fa/envelope-o';
import PasswordIcon from 'react-icons/lib/fa/lock';

import './App.css';
import InputField from './Components/InputField/InputField';
import RegisterButton from './Components/RegisterButton/RegisterButton';

export default class App extends Component {

  componentDidMount() {
    document.body.style.backgroundColor = '#00BCD5';
  }

  render() {
    return (
      <div className="App">
        <div className="Register-container">
          <div className="Header">Register</div>
          <div className="Header-tag">Join our community now!</div>
          <InputField type="text" placeholder="Username" icon={UserIcon} name="username"/>
          <InputField type="email" placeholder="Email" icon={EmailIcon} name="email"/>
          <InputField type="password" placeholder="Password" icon={PasswordIcon} name="password"/>
          <InputField type="password" placeholder="Password again" icon={PasswordIcon} name="reEnterPassword"/>
          <RegisterButton />
        </div>
      </div>
    );
  }
  
}
