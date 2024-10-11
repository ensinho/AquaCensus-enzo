// Definindo os métodos que serão usados para manipular os dados na tabela coleta
const Coleta = require('../models/Coleta');

exports.getAllColetas = async (req, res) => {
  try {
    const coletas = await Coleta.findAll();
    res.json(coletas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar coletas' });
  }
};

exports.createColeta = async (req, res) => {
  try {
    const { nome_cient, nome_comum, data, local, comprimento, peso, foto_coleta1, foto_coleta2, foto_coleta3, id_barco, id_user } = req.body;
    const novaColeta = await Coleta.create({ nome_cient, nome_comum, data, local, comprimento, peso, foto_coleta1, foto_coleta2, foto_coleta3, id_barco, id_user });
    res.status(201).json(novaColeta);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar coleta' });
  }
};
