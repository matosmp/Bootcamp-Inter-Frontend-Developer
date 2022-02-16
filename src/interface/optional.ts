/** Seção 5 - Interfaces
 * 
 * Aula 28 - Propriedade optional
 * 
 */

interface CadastroProps {
    nome:string,
    email:string,
    status?: boolean  // Propriedade opcional
};


const novoUsuario2: CadastroProps = {  // Novo usuário sem a propriedade status pq ela é opcional
    nome:"Fernando",
    email:"teste@gmail.com",
    
};

console.log(novoUsuario2);
