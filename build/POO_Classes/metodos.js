"use strict";
class Loja2 {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja2() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedido) {
        pedido.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
}
;
const pastelaria2 = new Loja2('Pastelaria teste', 'doces');
console.log(pastelaria2);
console.log(pastelaria2.nome);
console.log(pastelaria2.categoria);
pastelaria2.criarLoja2();
const teste3 = pastelaria2.emitirPedido(30);
console.log(teste3);
pastelaria2.emitirPedido(10, "Açaí", "Suco", "Lanche");
