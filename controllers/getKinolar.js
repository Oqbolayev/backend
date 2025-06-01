// controllers/getKinolar.js
const pool = require('../config/db');

exports.getMovies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi', error: error.message });
  }
};
