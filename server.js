const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const cartridgesRoute = require('./routes/cartridgesRoute');

dotenv.config();

// declare app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// default route for server
app.use('/', cartridgesRoute);

app.use((req, res) => res.status(404).send({
    message: "Could not find specified route that was requested"
}))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// port
const port = process.env.PORT || 5000;

// Run server
app.listen(
    port,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
);