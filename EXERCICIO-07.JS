let populacaoInfectada = 1000
let tempo = 7
let pessoasInfectadas;
let possiveisInfectados = 4

pessoasInfectadas = populacaoInfectada * Math.pow(possiveisInfectados, tempo / 7);

console.log(`Depois do prazo de ${tempo} dias, o total de pessoas infectadas é de ${pessoasInfectadas}, uma vez que inicialmente eram de apenas ${populacaoInfectada} pessoas. `);