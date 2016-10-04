/**
 * Created by deepaksisodiya on 04/10/16.
 */

export default {
  username: {
    rejex: /^(?=.*[A-Z])[0-9a-zA-Z]+$/,
    error: 'Invalid Username',
    isValid:false,
  },
  email: {
    rejex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    error: 'Invalid Email',
    isValid: false,
  },
  password: {
    rejex: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{5,10}$/,
    error: 'Invalid Password',
    isValid: false
  },
  reEnterPassword: {
    isValid: false
  }
}

/*
username validation
1. can contain 0-9 and a to z
2. must contain one uppercase letter

email validation


validation password
password can contain digits
password can contain character lower or upper case
password must have length between 5 to 10
password must contain at least on uppercase letter
password must contain at least on number
password can contain _ (underscore)
*/
