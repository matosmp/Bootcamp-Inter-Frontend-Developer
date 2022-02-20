/** Seção 10 - Decorators no TypeScript
 * 
 * Aula 50 - Entendendo como funciona
 * 
 * Decorators pode ser utilizado em:
 * Class
 * Propriedades
 * Métodos
 * Parametros (BEM POUCO UTILIZADO)
 * GETTERS/SETTERS (BEM POUCO UTILIZADO)
 * 
 * Basicamente o DECORATORS é uma função que recebe alguns parametros e retorna alguma coisa
 * 
 */

// O parâmetros target irá receber o constructor da classe ---> target é o constructor da classe( sempre usar o type any)
// function logInfo(target: any) {
//     console.log("Decorator está funcionando")
// }

//Padrão factory(fabrica) | Função que vai retornar a criação do decorators
function logInfo(mensagem: string) {
    return (target: any) => {  // Retornar o decorator criado
        console.log(`Mensagem: ${mensagem} e o target:${target}`)
    }
};

//Declarando o Decorator na classe Sistema
@logInfo("Servidor está rodando")
class Sistema {

};



