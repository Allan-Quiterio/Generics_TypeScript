function classGeneric() {
  class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
  }

  // Todas essas inferências são as mais simples, todas funcionam
  const pessoa1 = new Pessoa("Allan", 20);
  const pessoa2 = new Pessoa(["Allan"], 20);
  const pessoa3 = new Pessoa(["Allan"], { idade: 20 });
  const pessoa4 = new Pessoa<string, number>("Allan", 20);

  //Nesse caso como os valores serão criados após a criação da classe, o TS não consegue inferir a tipagem corretamente dos Generics
  class Pilha<T> {
    private contador = 0;
    private elementos: { [K: number]: T } = {};

    push(elemento: T) {
      this.elementos[this.contador] = elemento;
      this.contador++;
    }

    isEmpty() {
      return this.contador === 0;
    }

    pop(): T | void {
      if (this.isEmpty()) return undefined;

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

  // Nesse caso uma alternativa ao unknown seria espressar para ele o tipo em si, nesse caso number
  const pilha = new Pilha<number>();
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  pilha.pop();

  // pilha.mostrarPilha();

  while (!pilha.isEmpty()) {
    console.log(pilha.pop());
  }
}

classGeneric();
