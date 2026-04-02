const db = require('../models/db');

// Add Borrow Record
exports.addBorrow = (req, res) => {
  const { member_id, book_id, borrow_date, return_date } = req.body;

  db.query('INSERT INTO BorrowRecord (member_id, book_id, borrow_date, return_date) VALUES (?, ?, ?, ?)',
    [member_id, book_id, borrow_date, return_date],
    (err) => {
      if (err) throw err;
      res.send('Borrow record created');
    });
};

// Calculate Fees
exports.getFees = (req, res) => {
  const { record_id } = req.params;

  db.query('SELECT borrow_date, return_date FROM BorrowRecord WHERE record_id = ?', [record_id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) return res.send('Record not found');

    const { borrow_date, return_date } = results[0];
    const dueDate = new Date(borrow_date);
    dueDate.setDate(dueDate.getDate() + 14);

    const actualReturn = new Date(return_date);
    const lateDays = Math.max(0, Math.ceil((actualReturn - dueDate) / (1000 * 60 * 60 * 24)));

    const fee = lateDays * 200;
    res.json({ lateDays, fee });
  });
};
