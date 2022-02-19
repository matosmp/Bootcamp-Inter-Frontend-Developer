/** Seção 3 : Trabalhando com tipos
 * 
 * Aula 17 - Tuplas
 * 
 * Não existe tupla somente em JavaScript, somente usando TypeScript.
 * 
 * É como se fosse um contrato, tem um tamanho pré-definido precisa informar o tipo em todas posições do array.
 * Ex: let aluno:[string, number, string];
 */

 let aluno:[string, number, string];
 aluno = ['Fernando',10,'Tecnologia']; //Precisa seguir a mesma ordem passada na tipagem do array
 aluno.push('Larissa', 9 , 'TEC'); // Seguir a mesma ordem para adicionar também

 aluno.push(100,'Teste','elemento'); // Também aceita push na ordem diferente da tipagem que foi declarada
console.log(aluno);

let statusPedido : [string,string, string];
statusPedido=['Em produção','Saiu para entrega','Pedido entregue'];
console.log(statusPedido);




