/** Seção 7 - Poo Classes
 * 
 *  Aula 38 - Trabalhando com Herança
 * 
 * Herança : quando nós temos uma classe que herda outra classes
 * 
 * ClassePAI tem seus atributos e a classe FILHA vai herdar todos atributos do pai além dos seus próprios atributos
 * 
 */


class Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    };
}

class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number) {

        super(nome, email); // Chamando o constructor da classe Pai.

        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
        this.nivel = nivel
    }
}

const usuario15 = new Admin("Fernando","teste@gmail.com","Testador",2);
console.log(usuario15);