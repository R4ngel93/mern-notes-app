/* Set up */
require('dotenv').config();
const jwt = require('jsonwebtoken');

const User = require('../models/User.js');

async function validateUser(req, res, next) {
  //Require token
  let token = req.cookies.user_token;

  //Verify token
  const decoded = jwt.verify(token, process.env.SECRET);

  //Find user
  await User.findOne({ "_id": decoded.id, "token": token }, (error, user) => {
    if (error) throw error
    if (!user || error) return res.json({
      isAuth: false,
      error: true
    })
    req.token = token;
    req.user = user;
    next();
  });


}

module.exports = validateUser;