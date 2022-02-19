"use strict";
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    ;
    function setDados(novoDado) {
        dados = novoDado;
    }
    ;
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(15);
repo1.setDados("20");
console.log(repo1.getDados());
console.log('===========================================');
console.log(' Executando o código abaixo usando Generics');
function repositorio2() {
    let dados;
    function getDados() {
        return dados;
    }
    ;
    function setDados(novoDado) {
        dados = novoDado;
    }
    ;
    return { getDados, setDados };
}
const repo2 = repositorio2();
repo2.setDados(15);
console.log(repo2.getDados());
