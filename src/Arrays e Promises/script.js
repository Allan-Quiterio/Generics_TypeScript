"use strict";
function arrayEPromisse() {
    const arrayNumeros = [1, 2, 3, 4, 5];
    console.log(arrayNumeros);
    async function promiseAsync() {
        return 1;
    }
    async function myPromise() {
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
