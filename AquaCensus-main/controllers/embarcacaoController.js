// Definindo os métodos que serão usados para manipular os dados na tabela embarcacao
const Embarcacao = require('../models/Embarcacao');

exports.getAllEmbarcacoes = async (req, res) => {
  try {
    const embarcacoes = await Embarcacao.findAll();
    res.json(embarcacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar embarcações' });
  }
};

exports.createEmbarcacao = async (req, res) => {
  try {
    const { tipo, id_lab } = req.body;
    const novaEmbarcacao = await Embarcacao.create({ tipo, id_lab });
    res.status(201).json(novaEmbarcacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar embarcação' });
  }
};
