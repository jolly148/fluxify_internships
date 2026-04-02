const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models/db'); // adjust path if needed

// Member Login
exports.loginMember = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM member WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid email or password' });

    const member = results[0];

    // Compare password with hashed password in DB
    const match = await bcrypt.compare(password, member.password);
    if (!match) return res.status(401).json({ message: 'Invalid email or password' });

    // Generate JWT token
    const token = jwt.sign(
      { member_id: member.member_id, email: member.email },
      'your_secret_key',
      { expiresIn: '1h' }
    );

    res.json({ token });
  });
};
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

const jwt = require('jsonwebtoken');

// Login Member
exports.loginMember = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM member WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).send('Database error');
    if (results.length === 0) return res.status(401).send('Invalid email or password');

    const member = results[0];
    const match = await bcrypt.compare(password, member.password);
    if (!match) return res.status(401).send('Invalid email or password');

    // Generate JWT
    const token = jwt.sign(
      { member_id: member.member_id, email: member.email },
      'your_secret_key',
      { expiresIn: '1h' }
    );
    res.json({ token });
  });
};
