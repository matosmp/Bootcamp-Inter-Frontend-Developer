/** Seção 3 : Trabalhando com tipos
 * 
 * Aula 13 - Union types
 * 
 * union type --> Quando uma variável pode ser receber um numero ou string
 * 
 * 
 */

let userId:number | string;

userId = 123;
console.log(typeof userId)

userId="teste"
console.log(typeof userId)
