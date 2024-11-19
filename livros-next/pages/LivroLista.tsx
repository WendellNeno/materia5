import React, { useEffect, useState } from 'react';


interface Livro {
  codigo: number;
  titulo: string;
  autor: string;
  ano: number;
}

const LivroLista = () => {
  // Usando o tipo Livro para o estado dos livros
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    // Aqui você faria a requisição para obter os livros
    fetch('http://localhost:3030/livros')
      .then((res) => res.json())
      .then((data) => setLivros(data));
  }, []);

  const handleExcluir = (codigo: number) => {
    fetch(`http://localhost:3030/livros/${codigo}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((ok) => {
        if (ok) {
          setLivros(livros.filter((livro) => livro.codigo !== codigo));
        }
      });
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.map((livro) => (
          <li key={livro.codigo}>
            {livro.titulo} - {livro.autor}
            <button onClick={() => handleExcluir(livro.codigo)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivroLista;
