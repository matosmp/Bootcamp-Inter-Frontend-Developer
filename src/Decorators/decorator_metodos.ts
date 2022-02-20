/** Seção 10 - Decorators no TypeScript
 * 
 * Aula 53 - Aplicando em métodos
 * 
 */

//Decorator método só é chamado quando o método é chamado em algum local

function verificarPessoa2(idade: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log('Target: ' , target);
        // console.log('key: ' ,key);
        // console.log('Descriptor:' , descriptor);
        const metodoOriginal = descriptor.value // Salvar o método original

        //Sobrescrevendo o nosso método
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Estamos cadastrando como pessoa menor de idade");
            
            }else{
                console.log("Adulto cadastrado no sistema");
               
            };
        };

    };
};


class Pessoa2 {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    };

    @verificarPessoa2(16)
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema.`);
    };

};

const pessoa2 = new Pessoa2("Fernando");

pessoa2.cadastrarPessoa();