/** Seção 7 - Poo Classes
 * 
 *  Aula 39 - Encapsulamento , Aula 40 - Conhecendo o protected
 * 
 * MODIFICADORES: Public , Private , Protected
 * 
 * Obs: Implicitamente já é public não especifica nenhum modificador
 * 
 */


class Usuario6 {
    protected id: number; // protected significa que posso chamar na classe Usuario6 ou classes que extends Usuario6 
    nome: string;
    email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id
        this.nome = nome;
        this.email = email;
    };
}

class Admin2 extends Usuario6 {
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number) {

        super(id, nome, email); // Chamando o constructor da classe Pai.

        this.id=id;
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
        this.nivel = nivel
    };


    mudarCargo(): void {
        console.log("Alterando")
    }
};

const usuario5 = new Admin2(123,"Fernando", "teste@gmail.com", "Testador", 2);
console.log(usuario5);

