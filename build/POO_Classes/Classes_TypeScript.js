"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
}
;
const pastelaria = new Loja('Pastelaria teste', 'doces');
console.log(pastelaria);
console.log(pastelaria.nome);
console.log(pastelaria.categoria);
