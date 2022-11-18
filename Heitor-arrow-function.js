/*
Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
*/

var nome = prompt("Olá estranho! Qual o seu nome?");

const nomeMaiusculo = nome.charAt(0).toUpperCase() + nome.slice(1);

intro = (nomeMaiusculo) => nomeMaiusculo + " você acorda ainda tonto e percebe que está em uma carroça com os braços amarrados, um guarda guia a carroça atento ao caminho. Há outro prisioneiro, ele te olha e diz:";

console.log(intro(nomeMaiusculo));

function mensagem() {
    console.log("Ei você! Finalmente acordou...");
}

mensagem();

var dragonborn = prompt("Você é o Dovahkiin?");

function final(dragonborn){
    if (dragonborn === "s" || dragonborn === "sim" || dragonborn === "Sim") {
        console.log("Ao caminho da forca um dragão aparece e ataca a todos, na confusão você encontra uma brecha para fugir. Sua alma de dragão desperta enquanto Alduin lhe espera...");
    } else {
        console.log("Você é levado erroneamente a forca. Mais uma vítima de um mundo injusto que com certeza necessita de mais heóis...")
    }
} 

final(dragonborn);

