let montante;
let taxaDeJuros;
let taxaDecimal = taxaDeJuros / 100;
let tempo;
let capitalInicial;

montante = capitalInicial * (1 + taxaDecimal) ** tempo

console.log(`Se o capital inicial de ${capitalInicial}, é aplicado por um prazo de ${tempo} meses no sistema de juros compostos a uma taxa mensal fixa de ${taxaDeJuros} %, o valor do montante é de: R$ ${montante.toFixed(2)}`);