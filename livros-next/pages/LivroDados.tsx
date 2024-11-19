// pages/LivroDados.tsx
import React, { useState } from 'react';

const LivroDados = () => {
  const [livro, setLivro] = useState({ codigo: '', titulo: '', autor: '', ano: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para a API para salvar o livro
    fetch('http://localhost:3030/livros', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          alert('Livro incluído com sucesso!');
        } else {
          alert('Erro ao incluir o livro!');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={livro.titulo}
        onChange={(e) => setLivro({ ...livro, titulo: e.target.value })}
        placeholder="Título"
      />
      <input
        type="text"
        value={livro.autor}
        onChange={(e) => setLivro({ ...livro, autor: e.target.value })}
        placeholder="Autor"
      />
      <input
        type="number"
        value={livro.ano}
        onChange={(e) => setLivro({ ...livro, ano: parseInt(e.target.value) })}
        placeholder="Ano"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default LivroDados;
