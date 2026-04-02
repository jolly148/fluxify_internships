const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db');

const app = express();
app.use(bodyParser.json());

// Routes
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const borrowRoutes = require('./routes/borrowRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/books', bookRoutes);
app.use('/members', memberRoutes);
app.use('/borrow', borrowRoutes);
app.use('/payments', paymentRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json());

// existing routes
const borrowRoutes = require('./day4/routes/borrowRoutes');
app.use('/api', borrowRoutes);

// NEW Day 5 route
const returnRoutes = require('./day5/routes/returnRoutes');
app.use('/api', returnRoutes);

// server start
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
