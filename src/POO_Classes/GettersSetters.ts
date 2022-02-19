/** Seção 7 - Poo Classes
 * 
 * Aula 42 - Getters e Setters
 * 
 */

class Jogo {
    private servidor:string;
    private id:string="10";

constructor (servidor:string){
    this.servidor=servidor;
}

//Método GET = Para pegar o valor ao invés de acessar diretamente a propriedade
get getServidorIP(){
    return this.servidor;
};

//Método SET = Passar/Alterar algum atributo
set setServidorIP(novoIp:string){
    if(this.servidor === novoIp){
        throw new Error("O novo Ip deve ser diferente do IP antigo")
    }

    this.servidor = novoIp;
};

}
const GTA5 = new Jogo("192.168.5.10");
try{
    GTA5.setServidorIP = "192.168.5.10";
}catch(e:any){
    console.log("Error" , e.message)
}

console.log(GTA5.getServidorIP)


