/** Seção 3 : Trabalhando com tipos
 * 
 * Aula 22 - Type Assertions / Afirmação 
 * Usa-se: as + tipo ou <tipo>+nome
 * 
 */

let statusAtual: unknown = 1;
let mudarStatus: number = 0;

//Estou afirmando que o statusAtual é de fato um número!
mudarStatus = statusAtual as number;

//Outra maneira de afirmar um tipo
mudarStatus = <number>statusAtual;

console.log(mudarStatus)
