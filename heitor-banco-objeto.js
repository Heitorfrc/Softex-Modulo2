/*
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: 
buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.
*/

let banco = {
    conta : "1935676",
    agencia : "001",
    saldo : 5000,
    tipoDeConta : "Corrente",
    valorDepositado : 1000,
    valorsacado : 500,
    
    deposito : function() {
        banco.saldo += banco.valorDepositado;
    },

    saque : function() {
        banco.saldo -= banco.valorsacado;
    },

    buscarSaldo() {
        console.log("Seu saldo é: " + banco.saldo);
    },

    numeroConta() {
        console.log("O número da conta é: " + banco.conta);
    }
}

banco.deposito();
banco.saque();
banco.numeroConta();
banco.buscarSaldo();
