// Definindo os métodos que serão usados para manipular os dados na tabela favorito
const Favorito = require('../models/Favorito');

exports.getAllFavoritos = async (req, res) => {
  try {
    const favoritos = await Favorito.findAll();
    res.json(favoritos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar favoritos' });
  }
};

exports.createFavorito = async (req, res) => {
  try {
    const { id_user_fk, id_coleta_fk } = req.body;
    const novoFavorito = await Favorito.create({ id_user_fk, id_coleta_fk });
    res.status(201).json(novoFavorito);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar favorito:' });
  }
};
