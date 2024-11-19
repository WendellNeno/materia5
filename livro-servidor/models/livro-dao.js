// models/livro-dao.js
const Livro = require('./livro-schema');

const obterLivros = async () => {
    return await Livro.find();
};

const incluir = async (livro) => {
    const novoLivro = new Livro(livro);
    return await novoLivro.save();
};

const excluir = async (codigo) => {
    return await Livro.deleteOne({ _id: codigo });
};

module.exports = { obterLivros, incluir, excluir };
