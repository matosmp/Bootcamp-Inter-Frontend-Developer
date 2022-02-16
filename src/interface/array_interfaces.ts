/** Seção 5 - Interfaces
 * 
 * Aula 31 - Array dentro da Interface
 * 
 */

interface ITecnologiaProps{
    id:string,
    nome:string[],
}

let useTecnologia: ITecnologiaProps={
    id:"1",
    nome:["Java" ,"React ","Angular","TypeScript"]
}

console.log(useTecnologia);

console.log('================================================')

interface useTec{
    id:string,
    nome:string
};

interface INomesProps{
    tecnologias: useTec[]
};

let frontend:INomesProps = {
    tecnologias:[
        {id:"2",nome:"React"},
        {id:"3",nome:"Java"}
    ]
};

console.log(frontend);
