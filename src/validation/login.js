const validator = require('validator');
const isEmpty = require('is-empty');

/* Validates the login input fields */
function validateLoginInput(data) {
  let errors = {};

  //Convert empty fields to an empty string so we can use validator
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

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

  //Return
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = validateLoginInput;