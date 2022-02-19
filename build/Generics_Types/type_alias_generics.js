"use strict";
const farinha = {
    nome: "farinha de trigo",
    preco: 5.90
};
console.log(farinha);
console.log('================================');
console.log('Usando Generics com a interface');
const suco = {
    nome: "Suco de Laranja",
    preco: 10.50,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};
console.log(suco);
console.log(suco.formatar(10));
