"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "10";
        this.servidor = servidor;
    }
    get getServidorIP() {
        return this.servidor;
    }
    ;
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("O novo Ip deve ser diferente do IP antigo");
        }
        this.servidor = novoIp;
    }
    ;
}
const GTA5 = new Jogo("192.168.5.10");
try {
    GTA5.setServidorIP = "192.168.5.10";
}
catch (e) {
    console.log("Error", e.message);
}
console.log(GTA5.getServidorIP);
