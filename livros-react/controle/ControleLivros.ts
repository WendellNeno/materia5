// src/controle/ControleLivros.ts
const baseURL = 'http://localhost:3030/livros';

export const obterLivros = async () => {
    const response = await fetch(baseURL);
    const livros = await response.json();
    return livros.map((livro: any) => ({
        codigo: livro._id,
        titulo: livro.titulo,
        autor: livro.autor,
        ano: livro.ano,
    }));
};

export const excluirLivro = async (codigo: string) => {
    const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    const result = await response.json();
    return result.ok;
};

export const incluirLivro = async (livro: any) => {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(livro),
    });
    const result = await response.json();
    return result.ok;
};
