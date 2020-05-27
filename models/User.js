/* Set up */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create Schema */
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    maxlength: 20,
    unique: 1
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: 1
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 8
  },
  date: {
    type: Date,
    trim: true,
    default: Date.now
  },
  token: {
    type: String
  }
});

/* Methods */
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(this.password, salt)
      this.password = hash;
      next();
    } catch (error) {
      return next(error);
    }
  }
});

UserSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateToken = async function () {
  //Generate token
  const token = jwt.sign({ id: this._id }, process.env.SECRET, { expiresIn: 60 * 60 });

  //Save token in db
  this.token = token;
  this.save();

  return token;
}

/* Export model */
module.exports = mongoose.model('User', UserSchema);