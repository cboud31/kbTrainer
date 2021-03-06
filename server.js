// Create a web server using express
const express = require('express');
const server = express();

// Access and load environement variables
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

// Morgan middleware to log all requests.
const morgan = require('morgan');
server.use(morgan('dev'));

// Use bodyparser to handle json requests.
const bodyParser = require('body-parser');
server.use(bodyParser.json());

// API Routes
server.use('/api/exercises', require('./routes/exercises'));
// ** Don't forget to remove the route below once official API routes are entered
server.get('/', (req, res) => {
  res.send({ msg: `Welcome to the kbTracker API!` });
});

// Bring in the database connection.
const { client } = require('./db/index');

// Connect to the server and database.
const PORT = process.env.PORT;
server.listen(PORT, async () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);

  try {
    await client.connect();
    console.log('Connection to database is successful...');
  } catch (err) {
    console.log('Error connecting to database!!!');
  }
});
