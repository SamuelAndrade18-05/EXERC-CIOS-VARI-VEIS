let valorEmCaixa;
let valorProduto;
let valorDesconto;
let valorFinal;
let porcentagem;
let valorPercentualDesconto;

valorDesconto = (valorProduto - valorEmCaixa)
valorPercentualDesconto = (valorDesconto / valorProduto) * 100
valorFinal = valorProduto - (valorPercentualDesconto / 100) * valorProduto

console.log(`Diante  dos seguintes dados, o cupom que será necessário é de R$ ${valorDesconto.toFixed(2)} reais, que equivale a ${valorPercentualDesconto.toFixed(1)} % do valor total do produto.`);

