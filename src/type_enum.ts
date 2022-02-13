/** Seção 3 : Trabalhando com tipos
 * 
 * Aula 19 - Type Enum
 * 
 * Obs:No TypeScript é possível utilizar ENUM, apesar do JavaScript não ter esse tipo
 * 
 * Ex: enum nomeDaCor{
 *      white:"#FFFFFF",
 *      black:"#000000"
 *  }
 **/

//Declaração do enum entre chaves
enum DesignColors {
    white="#FFFFFF",
    black="#000000"
}
 console.log(`Cores ${DesignColors.white}`); 

//

enum StatusPermission{
    ADMIN,
    USER,
    SUPPORT
}

console.log(StatusPermission.SUPPORT); // Ao chamar o ENUM retornará a posição dele

// enum com atribuição de valor
enum StatusPermission2{
    ADMIN = 3,
    USER = 1,
    SUPPORT = 5
}

console.log("Enum com atribuição de valor = ",StatusPermission2.SUPPORT); // Ao chamar o ENUM retornará a posição dele


