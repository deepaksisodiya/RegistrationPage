/**
 * Created by deepaksisodiya on 04/10/16.
 */


import React, { Component } from 'react';

import './RegisterButton.css';
import rejexObj from './utils';

export default class RegisterButton extends Component {

  _onRegister = () => {
    let isFormHaveValues = false;
    for(let obj in rejexObj) {
      if(rejexObj[obj].value) {
        isFormHaveValues = true;
      } else {
        isFormHaveValues = false;
      }
    }
    if(isFormHaveValues) {
      let isValidForm = true;
      for (let obj in rejexObj) {
        if (rejexObj[obj].isValid === false) {
          isValidForm = false;
          break;
        }
      }
      if (isValidForm === false) {
        alert('Please validate the form');
      } else {
        alert('Success');
      }
    } else {
      alert('Please fill the form');
    }
  };

  render() {
    return (
      <div className="Button-container">
        <button className="button" onClick={this._onRegister}>REGISTER NOW</button>
      </div>
    )
  }

}