// Sprint 2 — Pessoa 2: renderize, abra e feche o carrinho.

function renderizarCarrinho() {
    const containerProdutos = document.querySelector('.cart__products');
    const elementoTotal = document.querySelector('.total');


    containerProdutos.innerHTML = '';

    let total = 0;


    if (!carrinho || carrinho.length === 0) {
        containerProdutos.innerHTML = '<p class="cart__empty">Seu carrinho está vazio.</p>';
        if (elementoTotal) {
            elementoTotal.textContent = formatarPreco(0);
        }
        return;
    }


    carrinho.forEach(item => {

        const livro = dados.livros.find(l => l.id === item.id);
        if (!livro) return;

        const valorLinha = livro.preco * item.quantidade;
        total += valorLinha;


        const divProduto = document.createElement('div');
        divProduto.className = 'cart__product';


        divProduto.innerHTML = `
            <div class="cart-mini-cover ${livro.corCapa || 'book-cover--coral'}"><b>${livro.siglaPagina || 'p.'}</b></div>
            <div class="cart__product-info">
                <h3>${livro.titulo}</h3>
                <p>Quantidade: ${item.quantidade}</p>
                <strong>${formatarPreco(valorLinha)}</strong>
            </div>

            <button class="cart__remove">Remover</button>
        `;

        // Sprint 3 — Pessoa 1: conecte a remoção de cada item.
        const botaoRemover = divProduto.querySelector('.cart__remove');

        botaoRemover.addEventListener('click', () => {
            carrinho = carrinho.filter(itemCarrinho => itemCarrinho.id !== item.id);

            salvarCarrinho();
            renderizarCarrinho();
        });

        containerProdutos.appendChild(divProduto);
    });


    if (elementoTotal) {
        elementoTotal.textContent = formatarPreco(total);
    }
}

function abrirCarrinho() {
    const painel = document.querySelector('.cart');
    const backdrop = document.querySelector('.cart-backdrop');
    const trigger = document.querySelector('.cart-trigger');

    if (painel) {
        painel.classList.add('cart--active');
        painel.setAttribute('aria-hidden', 'false');
    }
    if (backdrop) {
        backdrop.classList.add('cart-backdrop--active');
    }
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
    }
}

function fecharCarrinho() {
    const painel = document.querySelector('.cart');
    const backdrop = document.querySelector('.cart-backdrop');
    const trigger = document.querySelector('.cart-trigger');

    if (painel) {
        painel.classList.remove('cart--active');
        painel.setAttribute('aria-hidden', 'true');
    }
    if (backdrop) {
        backdrop.classList.remove('cart-backdrop--active');
    }
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cartTrigger = document.querySelector('.cart-trigger');
    const cartClose = document.querySelector('.cart__close');
    const cartBackdrop = document.querySelector('.cart-backdrop');

    if (cartTrigger) {
        cartTrigger.addEventListener('click', abrirCarrinho);
    }
    if (cartClose) {
        cartClose.addEventListener('click', fecharCarrinho);
    }
    if (cartBackdrop) {
        cartBackdrop.addEventListener('click', fecharCarrinho);
    }
});
