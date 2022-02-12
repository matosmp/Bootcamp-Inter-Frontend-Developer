/** Seção 3 : Trabalhando com tipos
 *  
 * Aula 10 - Type inference
 * 
 * Conceito de tipar a variável de acordo com a sua declaração ( tipagem dinâmica)
 * Ex: declarar let curso="TypeScript"  --> Significa que irá assumir o tipo string para a variável curso
 *
 *  Observação: Se atribuir um número a variável curso irá causar um erro na aplicação porque o typeScript tipou 
 *  essa variável como string 
 * 
 */

let curso = "TypeScript"
console.log(curso)


/**Tipagem dinâmica(type inference) permitindo os tipos string e number . No array abaixo foi declarado 
 * string e number.Portanto, pode receber string e number
 * 
 */
let tecnologias = [
    "Java",
    "React JS",
    2000

]

tecnologias.push("React Native")
tecnologias.push(2022)

console.log(tecnologias)
