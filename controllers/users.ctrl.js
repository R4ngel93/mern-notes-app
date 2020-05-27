/* Set up */
//require('dotenv').config();

/* Input validation */
const validateRegisterInput = require("../validation/register.js");
const validateLoginInput = require("../validation/login");

/* Model */
const User = require('../models/User');

/* Controllers */
module.exports = {

  //Method for registering a new user
  createUser: async function (req, res) {

    //Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    //Check validation
    if (!isValid) { return res.status(400).json(errors) }

    const { username, email, password } = req.body;
    //Check if email already exists
    await User.findOne({ email })
      .then(async user => {
        if (user) {
          return res.status(400).json({ message: "Email already exists [x]" });
        } else {
          //Fill a new user with the req.body data
          const newUser = new User({
            username,
            email,
            password
          });

          //Save the new document
          await newUser.save();
          res.status(201).json({ message: 'User created [\u2713]' });
        }
      });

  },//End createUser

  //Method for login an user
  loginUser: async function (req, res, next) {

    //Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    //Check validation
    if (!isValid) { return res.status(400).json(errors) }

    const { email, password } = req.body;
    //Find the user by email
    const user = await User.findOne({ email });
    if (!user) { return res.status(404).json({ message: "Username doesn't exist [x]" }); }

    //Check password
    const passwordMatch = await user.validatePassword(password);
    if (passwordMatch) {

      /* Generate token & save it in cookies */
      const token = await user.generateToken();
      res.cookie('user_token', token).status(200).json({ message: 'Logged in [\u2713]' });

    } else {
      return res.status(400).json({ message: "Password incorrect [x]" });
    }

  },//End loginUser

  //Log out
  logOut: async function (req, res, next) {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { token: '' },
      (err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
          message: 'logged out [\u2713]'
        })
      }
    )
  }//End logout

};