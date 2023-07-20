let capital;
let montante;
let taxa;
let tempo;
let ajusteTaxa = 1 / tempo

taxa = [(montante / capital) ** ajusteTaxa - 1] * 100



console.log(`Do valor emprestado de R$ ${capital} reais, e da quantia paga no total de R$ ${montante.toFixed(2)} reais, no tempo de ${tempo} meses, a taxa de juros aplicada foi de ${taxa.toFixed(3)}% a.m.`);
