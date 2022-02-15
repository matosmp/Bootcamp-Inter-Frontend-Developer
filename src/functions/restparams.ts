/** Seção 4 - Funções no TypeScript
 * 
 * Aula 26 - Rest Params em funções 
 *  
 */

//Criar uma função que recebe vários parâmetros
//Função comum
function totalVendas(venda1: number , venda2: number , venda3:number, venda4:number): number{
    const total = venda1+venda2+venda3+venda4;
    console.log(total);
    return total;
}

totalVendas(10,30,50,50);


//Utilizando tipagem com rest params
function vendas(...vendas: number[]): void{
    const quantidadeVendas = vendas.length;
    
console.log(`Você fez ${quantidadeVendas} vendas hoje`);
}

vendas(10,90,150,100,85);

//Tipagem com string[]
function mostrarNomes(...nomes:string[]):void{
    nomes.map(nome=>{
        console.log(nome)
    })
}

mostrarNomes('Fernando','Lucas','Mariana')