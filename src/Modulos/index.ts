/** Seção 8 - Módulos
 * 
 * Aula 47 - Entendo na prática
 * 
 * Quando importar um arquivo a função definida com default não precisa estar entre {}
 * 
 * Se a função não está definida como default precisa estar importada entre {}
 */


import teste,{soma} from "./testeExportacao";

// função exportada como default
teste();

// Essa função foi exportada somente usando export
console.log("Valor total = ",soma(10,5));