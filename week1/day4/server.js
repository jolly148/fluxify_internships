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

