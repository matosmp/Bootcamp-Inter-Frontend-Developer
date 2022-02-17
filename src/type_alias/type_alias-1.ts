type Uuid = number | string | null;

function acessar(uuid:Uuid,nome:string){
       console.log(`ID: ${uuid} - Bem vindo ${nome}`) 
};

function logUsuario(uuid:Uuid){
    console.log(`Conta referente ao UUID: ${uuid}`)
};

acessar(1,"Fernando");
acessar("15","Fabiana");

//Declarando o type Moedas significa que poderá receber somente os 3 abaixo ( BRL, EUR ou USD), qualquer outra moeda irá 
// causar um alerta do typeScript
type Moedas = "BRL" | "EUR" | "USD";

function comprarItem(moeda:Moedas){
    console.log(`Comprando com a moeda ${moeda}`)
};

comprarItem("USD");

// Se tentar usar o tipo Bitcoin na função comprarItem("BTC") irá causar erro.
