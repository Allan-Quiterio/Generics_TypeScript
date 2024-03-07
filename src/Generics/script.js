"use strict";
function generics() {
    function myFilter(array, callbackfn) {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (callbackfn(array[i])) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const menoresCinco = array.filter((value) => value < 5);
    console.log(menoresCinco);
    const arrayFiltrado = myFilter(array, (value) => value < 5);
    console.log(arrayFiltrado);
}
generics();
