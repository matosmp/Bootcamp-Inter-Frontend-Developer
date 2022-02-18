"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
    }
    ;
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    ;
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else
            return false;
    }
}
;
const correntista = new Conta();
console.log(correntista.solicitarLimiteApp(true, 800));
