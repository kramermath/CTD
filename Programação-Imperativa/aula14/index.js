/*
    ( x ) Atividade I: Converta o documento html para javascript
    ( x ) Atividade II: Converta objeto literal em função construtora
    ( x ) Atividade III: Divida o código em módulo
*/

// Importar o módulo
var DadosDoCliente = require('./conta'); 

// Criar uma instancia
var cliente = new DadosDoCliente("Willian", "Sant Anna", 2000, 222222, 0);

console.log("Saldo Atual:", `R$ ${cliente.saldoAtual}`);
console.log("----------------");
console.log("Depósito:", cliente.depositar(1000));
console.log("----------------");
console.log("Saque:", cliente.sacar(2000));
console.log("Saque:", cliente.sacar(1000));