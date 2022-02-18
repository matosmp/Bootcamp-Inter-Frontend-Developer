"use strict";
class Usuario6 {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    ;
}
class Admin2 extends Usuario6 {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
        this.nivel = nivel;
    }
    ;
    mudarCargo() {
        console.log("Alterando");
    }
}
;
const usuario5 = new Admin2(123, "Fernando", "teste@gmail.com", "Testador", 2);
console.log(usuario5);
