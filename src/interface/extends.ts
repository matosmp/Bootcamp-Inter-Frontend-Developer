/** Seção 5 - Interfaces
 * 
 * Aula 32 - Extendendo uma interface
 * 
 */


interface IJogoProps{
    readonly id: string,
    nome:string,
    descricao:string,
    plataforma:string[]
}

const left4dead: IJogoProps = {
    id:"1",
    nome:"Lef for dad 2 ",
    descricao:"Jogo de ação",
    plataforma:["PS5","PC"]
}

console.log(left4dead);

// A interface IAtualizacao está herdando todos atributos da outra interface IJogoProps
interface IAtualizacao extends IJogoProps{
    jogoOriginal: IJogoProps,
    novaAtualizacao:string[]
};

const jogoAtualizado:IAtualizacao = {
    id:"2",
    nome:"jogo teste 1",
    descricao:"Jogo de ação",
    plataforma:["PS5","PC"],
    novaAtualizacao:["Alteração das telas","Aumento de tempo"],
    jogoOriginal: left4dead
};

console.log(jogoAtualizado);


