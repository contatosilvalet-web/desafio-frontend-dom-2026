// Sprint 1 — Pessoa 2: leia o ID e mostre os detalhes.
// Consulte guia-apoio.md e modelos.md.

//Variável para buscar a URL
const buscaDaUrl = window.location.search;
// Método para transformar a string em um int
const parametros = new URLSearchParams(buscaDaUrl);
//Vai atribuir à variável idDoLivro o resultado de get.
const idDoLivro = parametros.get("id");
// Vai procurar a id do Livro.
const livroSelecionado = dados.livros.find(function (livro) {
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
<div class="book-detail__cover book-cover book-cover--coral">
  <h1>${livroSelecionado.titulo}</h1>
  <small>${livroSelecionado.autor}</small>
  <b>${livroSelecionado.paginas}</b>
</div>
<div class="book-detail__content">
  <h2>${livroSelecionado.titulo}</h2>
  <p class="book-detail__author">por ${livroSelecionado.autor}</p>
  <strong class="book-detail__price">${formatarPreco(livroSelecionado.preco)}</strong>
  <p class="book-detail__description">${livroSelecionado.descricao}</p>
  <div class="book-detail__buy">
    <button class="book-detail__add" type="button">Adicionar ao carrinho</button>
  </div>
</div>
    `;
}

// Sprint 2 — Pessoa 1: conecte o botão de adicionar.

const btnAdicionar = document.querySelector(".book-detail__add");

btnAdicionar.addEventListener("click", () => {
  const itemExistente = carrinho.find((item) => item.id === livroSelecionado.id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({
      id: livroSelecionado.id,
      quantidade: 1,
    });
  }

  salvarCarrinho();

  renderizarCarrinho();
  abrirCarrinho();

  console.log("Carrinho:", carrinho);
});