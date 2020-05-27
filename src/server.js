/* Set up */
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const path = require('path');

const UsersRoutes = require('./routes/users.routes.js');
const NotesRoutes = require('./routes/notes.routes.js');

require('./database/db_connection.js');
require('colors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

/* Settings & middlewares */
app.use(helmet());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client", "build")));

/* Routes */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Public routes
app.use('/api/users', UsersRoutes);

//Private routes
app.use('/api/notes', NotesRoutes);

/* Server */
app.listen(PORT, () => {
  console.log(`[Node.js] server on port [${PORT}] [\u2713]`.bgBrightBlue);
});

