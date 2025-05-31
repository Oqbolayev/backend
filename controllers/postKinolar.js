const pool = require('../config/db');

exports.createMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    if (!title) return res.status(400).send('title majburiy');

    const result = await pool.query(
      'INSERT INTO movies (title, director, year) VALUES ($1, $2, $3) RETURNING *',
      [title, director || null, year || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Serverda xatolik yuz berdi');
  }
};
