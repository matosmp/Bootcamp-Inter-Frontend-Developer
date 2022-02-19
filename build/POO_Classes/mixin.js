"use strict";
class Automovel {
    ligar() {
        console.log("AUTOMOVEL LIGADO COM SUCESSO");
    }
    ;
    desligar() {
        console.log("DESLIGANDO AUTOMOVEL");
    }
    ;
}
;
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
    ;
}
;
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
    ;
}
;
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
applyMixins(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol 1.0");
gol.ligar();
gol.desligar();
gol.descricao = 'Modelo automatico';
console.log(gol);
