"use strict";
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    ;
}
class Admin extends Usuario {
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const usuario15 = new Admin("Fernando", "teste@gmail.com", "Testador", 2);
console.log(usuario15);
