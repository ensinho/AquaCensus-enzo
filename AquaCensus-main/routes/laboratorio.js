const express = require('express');
const router = express.Router();
const laboratorioController = require('../controllers/laboratorioController');

router.get('/', laboratorioController.getAllLaboratorios);
router.post('/', laboratorioController.createLaboratorio);

module.exports = router;
