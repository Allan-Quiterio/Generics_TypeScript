"use strict";
const obterChave = (objeto, chave) => objeto[chave];
const animal = {
    cor: "Amarelo",
    vacinas: ["Vacina 1", "Vacina 2", "Vacina 3"],
    idade: 10,
};
const vacinas = obterChave(animal, "vacinas");
const cor = obterChave(animal, "cor");
const idade = obterChave(animal, "idade");
console.log(vacinas, cor, idade);
