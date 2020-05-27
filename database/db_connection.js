/* Set up */
//require('dotenv').config();
const mongoose = require('mongoose');

/* Database connection */
const db = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(db => console.log('[MongoDB] database is online... [\u2713]'.bgGreen))
  .catch(error => console.warn(error.bgRed));

/* Exports */
module.exports = db;