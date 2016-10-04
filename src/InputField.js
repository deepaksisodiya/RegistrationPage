/**
 * Created by deepaksisodiya on 04/10/16.
 */


import React, { Component } from 'react';
import './InputField.css';


export default class InputField extends Component {

  render() {
    const {type, placeholder} = this.props;
    return (
      <div className="Inputfield-container">
        <this.props.icon size="20px"/>
        <input type={type} placeholder={placeholder} className="Input-field"/>
      </div>
    )
  }


}