"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "10";
        this.nome = nome;
        this.idade = idade;
    }
    ;
}
;
const ana = new Pessoa("Ana", 50);
console.log(ana);
console.log(`ID da Ana: ${ana.id}`);
