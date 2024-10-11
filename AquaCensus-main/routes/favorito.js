const express = require('express');
const router = express.Router();
const favoritoController = require('../controllers/favoritoController');

router.get('/', favoritoController.getAllFavoritos);
router.post('/', favoritoController.createFavorito);

module.exports = router;
