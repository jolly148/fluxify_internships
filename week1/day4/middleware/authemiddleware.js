const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // If no token is provided
  if (!token) {
    return res.status(403).json({ message: 'Token required' });
  }

  // Verify token
  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Attach user info to request
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
