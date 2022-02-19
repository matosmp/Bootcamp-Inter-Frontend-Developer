//Declaração comum sem usar Types no generics
interface NovoProduto {
    nome: string;
    preco: number
}

const arroz: NovoProduto = {
    nome: "Arroz Branco",
    preco: 15.09
}

console.log(arroz)

// Usando Types com Generics na interface
console.log('====================================')
console.log('Usando Generics com a interface')

interface NovoProduto2<V extends string | number> {
    nome: V;
    preco: V
}

const feijao: NovoProduto2<string | number> = {
    nome: "feijão",
    preco: 20.10
}

console.log(feijao)
