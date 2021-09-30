const produtos = [
    {
        nomeProduto: 'Iphone',
        valorProduto: 500,
        qualidadeProduto: 10,
        status: true
    },
    {
        nomeProduto: 'Ipad',
        valorProduto: 1005,
        qualidadeProduto: 7,
        status: true
    },
    {
        nomeProduto: 'Airpod',
        valorProduto: 481,
        qualidadeProduto: 10,
        status: false
    }
]

let filtragem = produtos.filter((produto) => {
    return produto.valorProduto >= 482 && produto.valorProduto <= 1600 &&
        produto.qualidadeProduto > 6 &&
        produto.status == true
});

let valorDaCompra = filtragem.reduce((acumulador, elemento) => {
    return acumulador.valorProduto + elemento.valorProduto;
});

let carrinho = filtragem.map((item) => {
    return (` ${item.nomeProduto} R$ ${item.valorProduto}`);
});

console.log(`Resumo da compra:${carrinho}\nValor total: R$ ${valorDaCompra}`);
