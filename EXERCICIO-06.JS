let tempo = 1
let distanciaPecorrida = 300000
let velocidade;
let velocidadeFinal;

velocidade = distanciaPecorrida / tempo;
velocidadeFinal = velocidade * 3.6;

console.log(`Dada a distância pecorrida de ${distanciaPecorrida} metros em ${tempo} segundos, a velocidade final atingida foi de ${velocidadeFinal.toFixed(2)} km/h.`);
