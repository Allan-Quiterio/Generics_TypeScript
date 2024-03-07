"use strict";
function utilityTypes() {
    const objeto1 = {
        nome: "Allan",
        sobrenome: "Quiterio",
        idade: 20,
    };
    console.log(objeto1);
    const objeto2 = {
        nome: "Allan",
        sobrenome: "Quiterio",
        idade: 20,
    };
    console.log(objeto2);
    const objeto3 = {
        nome: "Allan",
        idade: 20,
    };
    console.log(objeto3);
    const objeto4 = {
        nome: "Allan",
        sobrenome: "Quiterio",
        idade: 20,
    };
    console.log(objeto4);
    const accountMongo = {
        _id: "qeqasdasdwdqwedqwsdas",
        nome: "Allan",
        idade: 20,
    };
    function mapAccount(accountMongo) {
        const { _id, ...accountData } = accountMongo;
        return { ...accountData, id: _id };
    }
    const accountApi = mapAccount(accountMongo);
    console.log(accountApi);
}
utilityTypes();
