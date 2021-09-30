function calculadora(valor1, valor2, operacao) {
    return operacao(valor1, valor2) }

function somar(valor1, valor2) {
var ResultadoSoma = valor1 + valor2
return ResultadoSoma }

console.log((calculadora(1, 5, somar)))