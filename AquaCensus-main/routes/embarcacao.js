const express = require('express');
const router = express.Router();
const embarcacaoController = require('../controllers/embarcacaoController');

router.get('/', embarcacaoController.getAllEmbarcacoes);
router.post('/', embarcacaoController.createEmbarcacao);

module.exports = router;
