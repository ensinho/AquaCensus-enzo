// Definindo os métodos que serão usados para manipular os dados na tabela laboratorio
const Laboratorio = require('../models/laboratorio');

exports.getAllLaboratorios = async (req, res) => {
  try {
    const laboratorios = await Laboratorio.findAll();
    res.json(laboratorios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar laboratórios' });
  }
};

exports.createLaboratorio = async (req, res) => {
  try {
    const { nome } = req.body;
    const novoLaboratorio = await Laboratorio.create({ nome });
    res.status(201).json(novoLaboratorio);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar laboratório' });
  }
};
