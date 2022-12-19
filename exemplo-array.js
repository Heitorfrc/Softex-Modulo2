/* Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.
*/

let filme = {
    nome: "matrix",
    ano: 1999,
    categoria: "ação"
};

let biblioteca = ["matrix", "goldeneye", "goonies"];

console.log("Esses são os filmes da nossa biblioteca:")
for (const prop2 of biblioteca) {
    console.log(prop2)
};

console.log("O filme escolhido é:")
for (const prop in filme) {
    console.log(`${prop}:`, filme[prop])
};
