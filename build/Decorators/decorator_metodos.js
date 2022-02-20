"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function verificarPessoa2(idade) {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value;
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Estamos cadastrando como pessoa menor de idade");
            }
            else {
                console.log("Adulto cadastrado no sistema");
            }
            ;
        };
    };
}
;
class Pessoa2 {
    constructor(nome) {
        this.nome = nome;
    }
    ;
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema.`);
    }
    ;
}
__decorate([
    verificarPessoa2(16)
], Pessoa2.prototype, "cadastrarPessoa", null);
;
const pessoa2 = new Pessoa2("Fernando");
pessoa2.cadastrarPessoa();
