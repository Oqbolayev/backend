const express = require('express');
const router = express.Router();

const { getMovies } = require('../controllers/getKinolar');
const { createMovie } = require('../controllers/postKinolar');
const { deleteMovie } = require('../controllers/delateKinolar');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
