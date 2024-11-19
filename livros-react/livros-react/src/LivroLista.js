// src/LivroLista.js
import React, { useEffect, useState } from 'react';
import { obterLivros, excluirLivro } from '../livros-react/controle/ControleLivrosros';

const LivroLista = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        obterLivros().then(setLivros);
    }, []);

    const handleExcluir = (codigo) => {
        excluirLivro(codigo).then((ok) => {
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
