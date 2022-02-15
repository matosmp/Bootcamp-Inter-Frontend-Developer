/** Seção 5 - Interfaces
 * 
 * Aula 27 - Aplicando interfaces
 * 
 * Conjunto ou padrão de dados que você precisa seguir , é um contrato.
 * 
 */

//Definindo a interface para tipar os dados
interface ILojaProps{
    nome:string;
    endereco:string;
    status?:boolean;
    produtoPromocao?:string
}

//Objeto tipado com a interface ILojaProps , esse objeto irá receber apenas os dados tipados na interface
const BurguerK: ILojaProps = {
    nome:"Burguer K",
    endereco: "Rua teste, 123",
    status:true,
    produtoPromocao:"X Burguer Duplo"
}

console.log(BurguerK);
console.log('===================================')


//Utilizando a interface em funções

function novaLoja({nome,endereco}:ILojaProps):void{
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Endereço da loja ${endereco}`);

}

novaLoja({nome:"Loja 2",endereco:"Rua teste 2"});