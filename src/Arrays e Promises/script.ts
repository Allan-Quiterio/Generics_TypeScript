function arrayEPromisse() {
  type MyType = number;

  // Utilização de Generics na tipagem de um array
  const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
  console.log(arrayNumeros);

  async function promiseAsync() {
    return 1;
  }

  // Utilização de Generics na tipagem de uma Promise
  async function myPromise(): Promise<MyType> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }

  promiseAsync().then((result) => console.log(result + 1));
  myPromise().then((result) => console.log(result + 1));
}

arrayEPromisse();
