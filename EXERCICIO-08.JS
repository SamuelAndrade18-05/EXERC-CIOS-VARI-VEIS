let comprimento;
let area;
const pi = 3.14;
let raio = 2.8
let explicacao;

comprimento = 2 * pi * raio;
area = pi * Math.pow(raio, 2);


if (raio < 2) {
    explicacao = `Para um círculo com raio de ${raio.toFixed(2)} metro, seu comprimento é de ${comprimento.toFixed(2)} metros e a sua área é ${area.toFixed(2)} metros quadrados.`;
}

else {
    explicacao = `Para um círculo com raio de ${raio.toFixed(2)} metros, seu comprimento é de ${comprimento.toFixed(2)} metros e a sua área é ${area.toFixed(2)} metros quadrados.`;
}

console.log(explicacao)

