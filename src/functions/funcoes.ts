/** Seção 4 - Funções no TypeScript
 * 
 * Aula 23 - Trabalhar com funções
 * 
 * Tipar os parâmetros e é possível tipar o retorno da função
 *  
 */

// Função tipada recebendo uma string e também com o retorno tipado com string
function login(userName:string):string{
    let nome = userName;

    return nome;
}

console.log(login('Fernando'));
