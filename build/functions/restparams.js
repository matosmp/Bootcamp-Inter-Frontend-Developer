"use strict";
function totalVendas(venda1, venda2, venda3, venda4) {
    const total = venda1 + venda2 + venda3 + venda4;
    console.log(total);
    return total;
}
totalVendas(10, 30, 50, 50);
function vendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje`);
}
vendas(10, 90, 150, 100, 85);
function mostrarNomes(...nomes) {
    nomes.map(nome => {
        console.log(nome);
    });
}
mostrarNomes('Fernando', 'Lucas', 'Mariana');
