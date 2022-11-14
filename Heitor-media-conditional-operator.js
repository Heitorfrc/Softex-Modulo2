/* 
Crie um código para uma escola o código deve ser um programa que informa se o aluno 
reprovou, ou não, com base nas três notas que ele adicionou ao programa.
Utilize, no mínimo, um operador de atribuição e um operador ternário.
*/

var n1 = parseFloat(prompt("Digite sua primeira nota: "));
var n2 = parseFloat(prompt("Digite sua segunda nota: "));
var n3 = parseFloat(prompt("Digite sua terceira nota: "));

media = (n1 + n2 + n3) / 3

resultado = media >= 7 ? "Voce está APROVADO" : "Voce está REPROVADO";

console.log(resultado)