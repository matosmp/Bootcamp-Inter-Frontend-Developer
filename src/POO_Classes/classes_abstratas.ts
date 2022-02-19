/** Seção 7 - POO-classes
 * 
 * Aula 44 - Classe abstrata
 * 
 * Classe abstrata é um conceito que permite criar uma classe que representa alguns métodos/atributos , ou seja, 
 * é apenas um modelo para construir outras classes.
 *  
 */

 type DadosConta = {
    nome: string
    numero: string
    endereco: string
};

abstract class ContaBanco {
    abstract abrirConta(dados:DadosConta):boolean;
};

class PessoaFisica extends ContaBanco{
   abrirConta(dados: DadosConta): boolean {
       console.log('===========================');
       console.log(`Nova conta pessoa fisica criada com sucesso Nome: ${dados.nome} ,
       numero: ${dados.numero} , endereco: ${dados.endereco} `)
       console.log('===========================')
    return true;
   };

};

class PessoaJuridica extends ContaBanco{
    abrirConta(dados: DadosConta): boolean {
        console.log('===========================');
       console.log(`Nova conta Pessoa Juridica criada com sucesso. Nome: ${dados.nome}  , 
       numero: ${dados.numero} , endereco: ${dados.endereco}`)
       console.log('===========================')
        return true
    };
};

const empresa = new PessoaJuridica();

empresa.abrirConta({
  nome:"Comercial frutas",
  numero:"90202-x",
  endereco:"Rua teste da Silva"
});

const pessoaFisica = new PessoaFisica();
pessoaFisica.abrirConta({
    nome:"Fernando",
    numero:"54455-x",
    endereco:"rua campo livre"
})

