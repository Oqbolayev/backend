const pool = require('../config/db');

exports.getMovies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Serverda xatolik yuz berdi');
  }
};
