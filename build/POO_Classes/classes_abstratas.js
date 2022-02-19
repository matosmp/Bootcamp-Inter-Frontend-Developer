"use strict";
class ContaBanco {
}
;
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log('===========================');
        console.log(`Nova conta pessoa fisica criada com sucesso Nome: ${dados.nome} ,
       numero: ${dados.numero} , endereco: ${dados.endereco} `);
        console.log('===========================');
        return true;
    }
    ;
}
;
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log('===========================');
        console.log(`Nova conta Pessoa Juridica criada com sucesso. Nome: ${dados.nome}  , 
       numero: ${dados.numero} , endereco: ${dados.endereco}`);
        console.log('===========================');
        return true;
    }
    ;
}
;
const empresa = new PessoaJuridica();
empresa.abrirConta({
    nome: "Comercial frutas",
    numero: "90202-x",
    endereco: "Rua teste da Silva"
});
const pessoaFisica = new PessoaFisica();
pessoaFisica.abrirConta({
    nome: "Fernando",
    numero: "54455-x",
    endereco: "rua campo livre"
});
