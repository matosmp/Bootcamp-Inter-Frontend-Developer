"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
;
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
;
acessar(1, "Fernando");
acessar("15", "Fabiana");
function comprarItem(moeda) {
    console.log(`Comprando com a moeda ${moeda}`);
}
;
comprarItem("USD");
