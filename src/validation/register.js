const validator = require('validator');
const isEmpty = require('is-empty');

/* Validates the register input fields */
function validateRegisterInput(data) {
  let errors = {};

  //Convert empty fields to an empty string so we can use validator
  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  //Validate name
  if (validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  //Validate email
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Validate password
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  //Return
  return {
    errors,
    isValid: isEmpty(errors)
  };

}

module.exports = validateRegisterInput;