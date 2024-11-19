// routes/livros.js
const express = require('express');
const { obterLivros, incluir, excluir } = require('../models/livro-dao');
const router = express.Router();

// Rota GET para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota POST para incluir um livro
router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        const resultado = await incluir(livro);
        res.status(201).json({ ok: true, livro: resultado });
    } catch (err) {
        res.status(400).json({ ok: false, message: err.message });
    }
});

// Rota DELETE para excluir um livro
router.delete('/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params;
        const resultado = await excluir(codigo);
        res.json({ ok: true, result: resultado });
    } catch (err) {
        res.status(500).json({ ok: false, message: err.message });
    }
});

module.exports = router;
