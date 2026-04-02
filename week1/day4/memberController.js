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
