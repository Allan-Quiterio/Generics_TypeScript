function typePredicate() {
  //O type predicate define que de acordo com o retorno, será inferido o tipo específico, nesse caso se for true, value é number
  function isNumber(value: unknown): value is number {
    return typeof value === "number";
  }

  console.log(isNumber("123"));
  console.log(isNumber(123));

  function soma<T>(...args: T[]): number {
    const retorno = args.reduce((soma, atual) => {
      if (isNumber(soma) && isNumber(atual)) return soma + atual;
      return soma;
    }, 0);

    return retorno;
  }

  console.log(soma(1, 2, 3));
  console.log(soma<string | number>(...[1, 2, 3, "a", "b", "c"]));
}

typePredicate();
