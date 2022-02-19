/** Seção 3 : Trabalhando com tipos
 * 
 * Aula 21 - Type Unknown
 * 
 * É um um tipo desconhecido, quando você não sabe o TIPO que vai receber 
 **/

//É diferente do tipo Any que aceita qualquer tipo
let total: any;
total = 100;
total = "Valor total";
total = {
    valorTotal:50
};

console.log(total.valorTotal)

//Exemplo com a diferença entre os tipos Any e Unknown
let idPedido: any = 123; // Any aceita qualquer tipo
let totalPedido: unknown = 15; // unknown não sabe qual tipo vai receber

let entregador : number = idPedido;

// Valor do tipo unknown só pode receber ser atribuido ao tipo unknown ou any
let totalEntrega: unknown = totalPedido;

//Se a variável totalEntrega fosse de outro tipo, por exemplo: number, iria ocorrer um erro.


