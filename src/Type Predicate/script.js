"use strict";
function typePredicate() {
    function isNumber(value) {
        return typeof value === "number";
    }
    console.log(isNumber("123"));
    console.log(isNumber(123));
    function soma(...args) {
        const retorno = args.reduce((soma, atual) => {
            if (isNumber(soma) && isNumber(atual))
                return soma + atual;
            return soma;
        }, 0);
        return retorno;
    }
    console.log(soma(1, 2, 3));
    console.log(soma(...[1, 2, 3, "a", "b", "c"]));
}
typePredicate();
