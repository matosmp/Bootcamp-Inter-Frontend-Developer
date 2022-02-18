/** Seção 7 - Poo Classes
 * 
 *  Aula 37 - Métodos
 * 
 */

class Loja2 {
    nome:string;
    categoria:string;

    constructor(nome:string,categoria:string){
        this.nome = nome;
        this.categoria = categoria
    }

    criarLoja2():void{
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa:number, ...pedido: string[]): string {
        pedido.map((pedido)=>{
            console.log(`Saindo novo pedido: ${pedido}`)    
        });
        

        return `Pedido na mesa: ${mesa}`
    }

};

const pastelaria2 = new Loja2('Pastelaria teste','doces');

console.log(pastelaria2);
console.log(pastelaria2.nome);
console.log(pastelaria2.categoria);
pastelaria2.criarLoja2();
const teste3 = pastelaria2.emitirPedido(30);
console.log(teste3);
pastelaria2.emitirPedido(10,"Açaí","Suco","Lanche");


