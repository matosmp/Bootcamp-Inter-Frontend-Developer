
//Declaração comum sem usar Types no generics
type NovoProduto3={
    nome:string
    preco:number
}

const farinha: NovoProduto3 = {
    nome: "farinha de trigo",
    preco: 5.90
}

console.log(farinha)

// Usando Types com Generics no type
console.log('================================')
console.log('Usando Generics com a interface')

type NovoProduto10<V extends string | number>={
    nome:V
    preco:V,
    formatar(valor:V):string;
}


const suco: NovoProduto10<string | number> = {
    nome: "Suco de Laranja",
    preco: 10.50,
    
    formatar (valor:number):string{
        let valorFormatado = valor.toLocaleString('pt-BR',{
            style:"currency",
            currency:"BRL"
        })
        
        return valorFormatado
    }        
};

console.log(suco)
console.log(suco.formatar(10));
