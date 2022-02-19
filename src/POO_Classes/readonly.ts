/**  Seção 7 - Poo Classes
 * 
 * Aula 42 - Modificador readonly
 * 
 * Readonly --> Usado apenas no atributos, esse modifiador permite apenas ler(dados). Não permite alterar.
 */

class Pessoa {
    id: string = "10";
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {

        this.nome = nome;
        this.idade = idade;
    };

};

const ana = new Pessoa("Ana", 50);
console.log(ana)

console.log(`ID da Ana: ${ana.id}`)
