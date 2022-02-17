/** Seção 6 - Type Alias
 * 
 * Aula 34 - Intersecção do Type Alias
 * 
 * Com Type Alias é possivel criar tipos mais poderosos , com mais informações do que tipo primitivos
 */

type Info = {
    id:number,
    nome:string,
    descricao?:string
};

type Categoria = {
    slug:string,
    quantidadeProduto:number
};

// Interseção de dois types Info e Categoria utilizando o & ===> ProdutoInfo é a união entre Info e Categoria
type ProdutoInfo = Info & Categoria;


const novoProduto:ProdutoInfo ={
    id:5236,
    nome:"Teclado",
    slug:"Teclado-mecânico",
    quantidadeProduto:10,

};

console.log(novoProduto);




