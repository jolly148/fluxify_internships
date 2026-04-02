const db = require('../models/db');

exports.returnBook = (req, res) => {
  const { borrow_id } = req.body;
  const sql = "UPDATE borrowrecord SET return_date = CURDATE() WHERE borrow_id = ?";

  db.query(sql, [borrow_id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Borrow record not found' });
    }
    res.json({ message: 'Book returned successfully' });
  });
};
