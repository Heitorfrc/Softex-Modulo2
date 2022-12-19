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