/** Seção 10 - Decorators no TypeScript
 * 
 * Aula 52 - Aplicando em propriedades
 * 
 * Muito utilizado para fazer validações(senhas, nomes e etc...)
 */

function validaNome(tamanho: number) {

    return (target: any, key: string) => {
        let valor = target[key]; // Para obter a propriedade da classe precisa acessar o constructor

        const getter = () => valor; // Para consultar o nome da propriedade

        const setter = (value: string) => {
            if (value === "") {
                console.log('Você não pode deixar em branco');
            } else if (value.length < tamanho) { // Verificar se o tamanha é menor do que o informado na declaração do decorator
                console.log('Você não pode criar com esse tamanho');
            } else {
                valor = value;
            };


        };
        //Definir o valor do nosso objeto.
        Object.defineProperty(target, key, { get: getter, set: setter })
    }

};


class Jogo1 {

    @validaNome(5)
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    };

};

const jogo1 = new Jogo1("GTA 5 Online");
console.log(jogo1.nome);

