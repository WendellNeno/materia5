// models/conexao.js
const mongoose = require('mongoose');

const banco = mongoose.connect('mongodb://localhost:27017/livraria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = banco;
