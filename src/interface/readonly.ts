/** Seção 5 - Interfaces
 * 
 * Aula 30 - Propriedade ReadOnly
 * 
 * Somente para leitura, não se pode alterar
 */

//Basta colocar a propriedade readonly antes do id do produto
interface IProdutosProps{
    readonly id:string,
    nome:string,
    descricao:string
}

let produto1:IProdutosProps = {
    id:"1",
    nome:"Bola",
    descricao:"Bola de futebol"
}

//Se tentar alterar o id irá ocorrer um erro pq é um atributo somente de leitura
//   ---->   produto1.id="2";

console.log(produto1);





