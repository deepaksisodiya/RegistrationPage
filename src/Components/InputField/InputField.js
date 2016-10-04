/**
 * Created by deepaksisodiya on 04/10/16.
 */


import React, { Component } from 'react';

import './InputField.css';
import rejexObj from '../../utils';

export default class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isError:false,
      errorMessage: '',
    };
  }

  _onBlur = (e) => {
    let value = e.target.value;
    if(value) {
      if(this.props.name === 'reEnterPassword') {
        rejexObj[this.props.name].value = value;
        let isValid = rejexObj['password'].rejex.test(value);
        if(isValid) {
          let passwordValue = document.getElementById('password').value;
          if(passwordValue !== value) {
            rejexObj[this.props.name].isValid = false;
            this._setState(true, 'Password not matching');
          } else {
            rejexObj[this.props.name].isValid = true;
            this._setState(false, '');
          }
        } else {
          rejexObj[this.props.name].isValid = false;
          this._setState(true, rejexObj['password'].error);
        }
      } else {
        rejexObj[this.props.name].value = value;
        let isValid = rejexObj[this.props.name].rejex.test(value);
        if(isValid) {
          rejexObj[this.props.name].isValid = true;
          this._setState(false, '');
        } else {
          rejexObj[this.props.name].isValid = false;
          this._setState(true, rejexObj[this.props.name].error);
        }
      }
    }
  };

  _setState = (isError, errorMessage) => {
    this.setState({
      isError,
      errorMessage
    });
  };

  render() {
    const {type, placeholder, name} = this.props;
    return (
      <div className="Inputfield-container">
        {this.state.isError && <div className="Error">{this.state.errorMessage}</div>}
        <this.props.icon size="20px"/>
        <input type={type} placeholder={placeholder} className="Input-field" onBlur={this._onBlur} id={name}/>
      </div>
    )
  }
  
}