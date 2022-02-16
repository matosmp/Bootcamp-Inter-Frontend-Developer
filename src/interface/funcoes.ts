/** Seção 5 - Interfaces
 * 
 * Aula 29 - Passando funções na interface
 * 
 */

interface ICursoProps{
    id:string,
    nome:string,
    preco:number,

    //Definir apenas função e o que ela deve esperar de retorno
    promocao:(preco:number) => void;

};

function mostrarPromocao(preco:number):void{
    console.log(`Promocao no curso por apenas: R$ ${preco}`);
};

const novoCurso:ICursoProps ={
    id:"1",
    nome:"Curso TypeScript",
    preco:750,
    promocao:mostrarPromocao // Também é possível utilizar um arrowFunction diretamente
};

console.log(novoCurso) 
console.log(novoCurso.promocao(300));


console.log('=========================================================')

//Declarar uma interface como função
interface ISomaNumeros{
    (valor1: number,valor2: number) : unknown
};

let somaNumeros:ISomaNumeros=(valor1:number,valor2:number):number =>{
    console.log('Resultado',valor1+valor2)
    return valor1+valor2
};

const resultado = somaNumeros(10,30);
console.log(resultado);
