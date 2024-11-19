// models/livro-schema.js
const banco = require('./conexao');
const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true }
});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;
