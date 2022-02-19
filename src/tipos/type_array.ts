/** Seção 3 : Trabalhando com tipos
 * 
 * Aula 16 - Array
 * 
 * Formas de declarar o tipo:
 * 
 * let filmes:Array<string>
 * let filmes: string[]
 * 
 */


let numeros: number[];
numeros=[1,5,20,65];
console.log(numeros);

numeros.push(55);

console.log(`Após adicionar o número 55 = ${numeros}`);


let filmes: string[];
filmes = ['Homem de Ferro', 'Hulk'];
console.log(filmes);

filmes.push('Vingadores');
console.log(filmes);


let filmesNumeros: Array< string | number>;
filmesNumeros=['Homem de Ferro', 100 , 'Hulk' , 300 ]
console.log(filmesNumeros)



