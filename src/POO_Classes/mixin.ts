/** Seção 7 - POO_Classes
 * 
 * Aula 45 - Mixins
 * Utilizado para que uma classe possa herdar de 2 ou mais classes.
 * 
 * 
 */

class Automovel{
    ligar():void{
        console.log("AUTOMOVEL LIGADO COM SUCESSO")
    };

    desligar():void{
        console.log("DESLIGANDO AUTOMOVEL")
    };
};

class Especificacao{
    descricao:string;

    constructor(descricao:string){
        this.descricao=descricao;
    };
};


class Carro{
    nome: string;

    constructor (nome:string){
        this.nome=nome;
    };
};

//Interface pode receber mais de 1 classe
interface Carro extends Automovel,Especificacao{}


// Função extraída da documentação do TypeScript
 function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }

  applyMixins(Carro,[Automovel,Especificacao]);

  const gol= new Carro("Gol 1.0");

  gol.ligar();
  gol.desligar();
  gol.descricao='Modelo automatico';
  
  console.log(gol)






