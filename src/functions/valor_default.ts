/* Como deixar um valor por default ou deixar ele opcional.
* 
*/

//Ao inicializar a variável nome com um valor ela se torna opcional, nesse caso é uma string
function cadastro(email:string, senha:string, nome="Aluno" , idade?:number ) : void {
    let data ={ email , senha , nome , idade};
    console.log(data)
}

cadastro('teste@gmail.com','fg12','Fernando',35);

function cadastroLoja(nome:string , email:string , status = false): boolean{
    console.log("Status atual da loja" , status)
    return status;
}

cadastroLoja('Loja 1 ' , 'loja1@teste.com',true); 