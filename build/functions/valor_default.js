"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro('teste@gmail.com', 'fg12', 'Fernando', 35);
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual da loja", status);
    return status;
}
cadastroLoja('Loja 1 ', 'loja1@teste.com', true);
