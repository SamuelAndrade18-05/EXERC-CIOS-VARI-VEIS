let xUm = 1
let yUm = 1
let xDois = 10
let yDois = 45
let distancia;
const formulaDistancia = (xDois - xUm) ** 2 + (yDois - yUm) ** 2;

distancia = Math.sqrt(formulaDistancia)
console.log(`Dados os dois pontos no plano, a distância entre eles é de: ${distancia.toFixed(2)}.`);


