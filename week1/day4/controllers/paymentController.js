const db = require('../models/db');

// Monthly Revenue
exports.getRevenue = (req, res) => {
  const { month } = req.params;
  db.query('SELECT SUM(amount) AS total FROM Payment WHERE MONTH(payment_date) = ?', [month], (err, results) => {
    if (err) throw err;
    res.json({ month, totalRevenue: results[0].total });
  });
};
