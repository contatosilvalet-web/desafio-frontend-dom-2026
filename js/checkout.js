// Sprint 3 — Pessoa 2: implemente a finalização simulada.
// Função para lidar com a finalização da compra
function finalizarCompra() {
    // 2. Se o carrinho estiver vazio, mostra um alerta e encerra com return
    if (!carrinho || carrinho.length === 0) {
        alert("O seu carrinho está vazio.");
        return;
    }

    // 3. Caso contrário, captura o texto do elemento .total
    const elementoTotal = document.querySelector('.total');
    const totalCompra = elementoTotal ? elementoTotal.textContent : "R$ 0,00";

    alert(`Compra simulada com sucesso! Total: ${totalCompra}`);

    // 4. Atribui um array vazio ao carrinho, salva, renderiza novamente e fecha o painel
    carrinho = [];
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    renderizarCarrinho();
    fecharCarrinho();
}

// 1. Registra o clique de .checkout uma única vez, ao carregar o arquivo (dentro do DOMContentLoaded ou adaptado ao seu evento de carregamento)
document.addEventListener('DOMContentLoaded', () => {
    
    const botaoCheckout = document.querySelector('.checkout');
    if (botaoCheckout) {
        botaoCheckout.addEventListener('click', finalizarCompra);
    }
});