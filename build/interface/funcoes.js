"use strict";
;
function mostrarPromocao(preco) {
    console.log(`Promocao no curso por apenas: R$ ${preco}`);
}
;
const novoCurso = {
    id: "1",
    nome: "Curso TypeScript",
    preco: 750,
    promocao: mostrarPromocao
};
console.log(novoCurso);
console.log(novoCurso.promocao(300));
console.log('=========================================================');
;
let somaNumeros = (valor1, valor2) => {
    console.log('Resultado', valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(10, 30);
console.log(resultado);
