"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listaSalva = localStorage.getItem("@listagem_tarefa");
let tarefas = [];
function listarTarefas() {
    listElement.innerHTML = "";
    tarefas.map(item => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createElement(item);
        todoElement.appendChild(tarefaText);
        listElement.appendChild(todoElement);
    });
}
;
listarTarefas();
function adicionarTarefa() {
    if (inputElement.value === " ") {
        alert("Digite alguma coisa");
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listarTarefas();
        salvarDados();
    }
    ;
}
;
buttonElement.onclick = adicionarTarefa;
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
;
