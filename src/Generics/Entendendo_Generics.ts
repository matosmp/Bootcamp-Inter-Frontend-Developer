/** Seção 9 - Generics
 * 
 * Aula 48 - Entendendo Generics
 * 
 * Para criar estruturas mais genéricas que são flexíveis, ou seja, criar estruturas que são mais adaptaveis a vários 
 * tipos de dados. Ajuda a reaproveitar melhor o código.
 * 
 * Pode-se utilizar em:
 * Funções | interfaces | type | classes
 */


// 1 - Exemplos sem utilizar Generics
function repositorio() {
    let dados: number | string;

    function getDados() {
        return dados;
    };

    function setDados(novoDado: number | string) {
        dados = novoDado;
    };

    return { getDados, setDados }

}

const repo1 = repositorio();
repo1.setDados(15);

repo1.setDados("20");

console.log(repo1.getDados());

//Aplicando Generics
console.log('===========================================')
console.log(' Executando o código abaixo usando Generics')

/*Declarando o generics após o nome da função, usando o sinal de maior e menor <> e informando o tipo entre o sinal. 
 * * Ao invés da letra T pode-se usar qualquer outra letra e etc. Porém, existe alguns padrões que é muito encontrado mercado
 * 
 * Padrões:
 * 
 * S --> State;
 * T --> Type;
 * K --> Key;
 * V --> Value;
 * E --> Element (HTML);
 *  
*/

//
function repositorio2<T>(){/*Também é possível determinar tipos,EX: function repositorio2<T extends string | number>()
                             Isso força a usarem nesse generics somente os tipos string e number , se tentar utilizar
                             um outro tipo irá ocorrer erro */
    let dados: T;

    function getDados() {
        return dados;
    };

    function setDados(novoDado:T) {
        dados = novoDado;
    };

    return { getDados, setDados }

}

/**
 * Também é possível especificar o tipo desse generic atribuindo um tipo depois do nome da função
 */
const repo2 = repositorio2<string | number>();

repo2.setDados(15);

console.log(repo2.getDados());




