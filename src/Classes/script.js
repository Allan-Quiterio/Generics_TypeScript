"use strict";
function classGeneric() {
    class Pessoa {
        nome;
        idade;
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }
    const pessoa1 = new Pessoa("Allan", 20);
    const pessoa2 = new Pessoa(["Allan"], 20);
    const pessoa3 = new Pessoa(["Allan"], { idade: 20 });
    const pessoa4 = new Pessoa("Allan", 20);
    class Pilha {
        contador = 0;
        elementos = {};
        push(elemento) {
            this.elementos[this.contador] = elemento;
            this.contador++;
        }
        isEmpty() {
            return this.contador === 0;
        }
        pop() {
            if (this.isEmpty())
                return undefined;
            this.contador--;
            const elemento = this.elementos[this.contador];
            delete this.elementos[this.contador];
            return elemento;
        }
        length() {
            return this.contador;
        }
        mostrarPilha() {
            for (const chave in this.elementos) {
                console.log(this.elementos[chave]);
            }
        }
    }
    const pilha = new Pilha();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.pop();
    while (!pilha.isEmpty()) {
        console.log(pilha.pop());
    }
}
classGeneric();
