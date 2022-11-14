/*
Crie um programa que o aluno deve escrever duas notas e o retorno informa 
a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.
*/

var n1 = parseFloat(prompt("Digite sua primeira nota: "));
var n2 = parseFloat(prompt("Digite sua segunda nota: "));

n3 = 21 - n1 - n2

console.log("O valor mínimo da sua nota para a aprovação é " + n3);