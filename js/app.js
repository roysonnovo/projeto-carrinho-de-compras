function adicionar() {
    //Recuperar valores nome, quantidade e valor do produto
    let produto = document.getElementById('produto');
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let qtdProduto = document.getElementById('quantidade');
   
    let preco = qtdProduto.value * valorProduto;
    //Calcular o preço final
    

    //Adicionar no carrinho
    //Atualizar o valor total
}

function limpar () {

}