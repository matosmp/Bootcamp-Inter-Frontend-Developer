"use strict";
const BurguerK = {
    nome: "Burguer K",
    endereco: "Rua teste, 123",
    status: true,
    produtoPromocao: "X Burguer Duplo"
};
console.log(BurguerK);
console.log('===================================');
function novaLoja({ nome, endereco }) {
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Endereço da loja ${endereco}`);
}
novaLoja({ nome: "Loja 2", endereco: "Rua teste 2" });
