const db = require('../models/db');
const bcrypt = require('bcryptjs');

// Register Member
exports.addMember = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      'INSERT INTO member (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Database error');
        }
        res.send('Member registered successfully');
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering member');
  }
};

// Get Members
exports.getMembers = (req, res) => {
  db.query('SELECT member_id, name, email FROM member', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
};

