function utilityTypes() {
  //Record => É expressado qual o tipo da chave e o tipo do valor de um objeto
  const objeto1: Record<string, string | number> = {
    nome: "Allan",
    sobrenome: "Quiterio",
    idade: 20,
  };
  console.log(objeto1);

  type Pessoa = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
  };

  //Required => Ele faz com que a tipagem de algum type/interface seja obrigatória/requerida.
  type PessoaRequired = Required<Pessoa>;

  const objeto2: PessoaRequired = {
    nome: "Allan",
    sobrenome: "Quiterio",
    idade: 20,
  };
  console.log(objeto2);

  type Pessoa2 = {
    nome: string;
    sobrenome: string;
    idade: number;
  };

  //Partial => O contrário do Required, nesse caso ele transforma todas as tipagens opcionais de um type/interface.
  type PessoaPartial = Partial<Pessoa2>;

  const objeto3: PessoaPartial = {
    nome: "Allan",
    idade: 20,
  };
  console.log(objeto3);

  //Readonly => Transforma todas as tipagens para somente leitura
  type PessoaReadonly = Readonly<PessoaRequired>;

  const objeto4: PessoaReadonly = {
    nome: "Allan",
    sobrenome: "Quiterio",
    idade: 20,
  };
  // objeto4.nome = "Allan12" //erro
  console.log(objeto4);

  //Pick => Permite escolher as coisas que somente quer utilizar => Nesse caso o PessoaPick terá somente nome e sobrenome
  type PessoaPick = Pick<PessoaRequired, "nome" | "sobrenome">;

  //Extract  => Computa os tipos que se repetem em ambos os types, no caso o C é o único que se repete.
  //Exclude => Computa todos os tipos que estão no primeiro tipo ABC que não estão no segundo tipo CDE, nesse caso seria AB, já que C está em ambos
  type ABC = "A" | "B" | "C";
  type CDE = "C" | "D" | "E";
  type TipoExclude = Exclude<ABC, CDE>; // AB
  type TipoExtract = Extract<ABC, CDE>; // C

  type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
  };

  //Nesse caso, ele está pegando de AccountMongo e excluindo o que for _id e depois adicionando o id através da intersection &
  type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
    id: string;
  };

  const accountMongo: AccountMongo = {
    _id: "qeqasdasdwdqwedqwsdas",
    nome: "Allan",
    idade: 20,
  };

  function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
  }

  const accountApi = mapAccount(accountMongo);
  console.log(accountApi);
}

utilityTypes();
