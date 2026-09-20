// Sprint 1 — Pessoa 2: leia o ID e mostre os detalhes.
// Consulte guia-apoio.md e modelos.md.
// Sprint 2 — Pessoa 1: conecte o botão de adicionar.

//Variável para buscar a URL
const buscaDaUrl = window.location.search;
// Método para transformar a string em um int
const parametros = new URLSearchParams(buscaDaUrl);
//Vai atribuir à variável idDoLivro o resultado de get.
const idDoLivro = parametros.get('id');
// Vai procurar a id do Livro.
const livroSelecionado = dados.livros.find(function(livro){
    return livro.id === idDoLivro;
});


const areaDetalhes = document.querySelector(".book-detail");
if (!livroSelecionado) {
    areaDetalhes.innerHTML = `
    <h1>Livro não encontrado</h1>
    <a href="./index.html#catalogo">Voltar ao catálogo</a>
    `;
} else {
    areaDetalhes.innerHTML = `
    <h2>${livroSelecionado.titulo}</h2>
    <p>Por ${livroSelecionado.autor}</p>
    <span>${precoAjustado.toFixed(2)}</span>
    <p>${livroSelecionado.descricao}</p>
    <button class="book-detail__add">Adicionar ao carrinho</button>
    `;
}
