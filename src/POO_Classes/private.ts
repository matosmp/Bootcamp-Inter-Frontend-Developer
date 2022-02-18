/**  Seção 7 - Poo Classes
 *  Aula 41 - private
 * 
 * private não pode ser modificado ou acessado fora da classe
 * 
 */

class Conta {
    private limite: number = 450;

    //private só pode ser acessado aqui dentro da classe
    private aumentarLimite(quantidade: number) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`)
        }
        
    };

    protected solicitarLimite(quantidade:number){
        return this.aumentarLimite(quantidade)
    };   

    // Implicitamente é public, portanto, pode ser acessado fora da classe
    solicitarLimiteApp(estaAutenticado:boolean,quantidade:number): void | boolean{
        if(estaAutenticado){
            this.aumentarLimite(quantidade);
        }else
        return false
    }


};

const correntista = new Conta();
console.log(correntista.solicitarLimiteApp(true,800));
