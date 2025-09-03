let totalGeral;
limpar();

function adicionar() {
    //Recuperar valores nome, quantidade e valor do produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let qtdProduto = document.getElementById('quantidade').value;
   //Calcular o preço final
    let preco = qtdProduto * valorProduto;
    let carrinho= document.getElementById('lista-produtos');
    //Adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtdProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //Atualizar o valor total
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}