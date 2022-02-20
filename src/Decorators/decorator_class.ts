/** Seção 10 - Decorators no TypeScript
 * 
 * Aula 51 - Decorator em classes
 * 
 */

//Decorator  --> target é o constructor da classe
function setIpServidor(novoIp:string){
    return (target:any)=>{
        return class extends target{
            ip = novoIp 
        };
    };
};


@setIpServidor("192.168.50.30")
class Servidor{

};


const servidor1 = new Servidor();
console.log(servidor1);
