const db = require('../models/db');

// Add a new book
exports.addBook = (req, res) => {
  const { title, author, published_year } = req.body;

  db.query(
    'INSERT INTO Book (title, author, published_year) VALUES (?, ?, ?)',
    [title, author, published_year],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error');
      }
      res.send('Book added successfully');
    }
  );
};

// Get all books
exports.getBooks = (req, res) => {
  db.query('SELECT * FROM Book', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
};
