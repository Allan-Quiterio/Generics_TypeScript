function typeEInterface() {
  // Como seria 2 tipos de dados diferentes é necessário um novo genérico
  interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
  }

  // Bem parecido com a implementação da interface
  type PessoaProtocolo2<T = string, U = number> = {
    nome: T;
    sobrenome: T;
    idade: U;
  };

  const aluno1: PessoaProtocolo<string, number> = {
    nome: "Allan",
    sobrenome: "Quiterio",
    idade: 20,
  };

  // Por utilizar generics, eu posso passar qualquer tipo possível, nesse caso não tem muita lógica
  const aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 20,
  };

  //Como há um default na interface nesse caso não seria preciso passar já que condiz com o que eu quero passar
  const aluno3: PessoaProtocolo2 = {
    nome: "Allan2",
    sobrenome: "Quiterio2",
    idade: 20,
  };

  console.log(aluno1, aluno2, aluno3);
}

typeEInterface();
