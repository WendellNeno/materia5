// src/LivroDados.js
import React, { useState } from 'react';
import { ControleLivros } from '../controle/ControleLivros';

const LivroDados = () => {
  const [livro, setLivro] = useState({ codigo: '', titulo: '', autor: '', ano: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    ControleLivros.incluirLivro(livro).then(response => {
      if (response) {
        alert('Livro incluído com sucesso');
      } else {
        alert('Falha ao incluir livro');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={livro.titulo} onChange={(e) => setLivro({ ...livro, titulo: e.target.value })} placeholder="Título" />
      <input type="text" value={livro.autor} onChange={(e) => setLivro({ ...livro, autor: e.target.value })} placeholder="Autor" />
      <input type="number" value={livro.ano} onChange={(e) => setLivro({ ...livro, ano: e.target.value })} placeholder="Ano" />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default LivroDados;
