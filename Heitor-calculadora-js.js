/*
Crie uma calculadora que receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e o resto, caso haja alguma.
*/

var ope = prompt("Digite o código da operação (+, -, *, /): ");
var x = parseFloat(prompt("Digite o primeiro número: "));
var y = parseFloat(prompt("Digite o segundo número: "));

let resultado;

if (ope == "+") {
    resultado = x + y;
} else if (ope == "-") {
    resultado = x - y;
} else if (ope == "*") {
    resultado = x * y;
} else if (ope == "/") {
    if (y == 0) {
        resultado = "Não pode ser dividido por zero";
    } else {
        resto = x % y;
        divisao = Math.floor(x / y);
        resultado = divisao + " com resto " + resto;
    }
} else {
    resultado = "Use um código de operação válido"
}

console.log(resultado);
