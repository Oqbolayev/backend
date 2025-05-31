const pool = require('../config/db');

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) return res.status(404).send('Kino topilmadi');

    res.send('Kino muvaffaqiyatli o\'chirildi');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Serverda xatolik yuz berdi');
  }
};
