/** Seção 7 - Poo Classes
 * 
 *  Aula 36 - Classes no TypeScript
 * 
 */

class Loja {
    nome:string;
    categoria:string;

    constructor(nome:string,categoria:string){
        this.nome = nome;
        this.categoria = categoria
    }
};

const pastelaria = new Loja('Pastelaria teste','doces');

console.log(pastelaria);
console.log(pastelaria.nome);
console.log(pastelaria.categoria);

