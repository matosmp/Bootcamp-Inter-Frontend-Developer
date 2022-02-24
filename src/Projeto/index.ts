
let listElement = document.querySelector("#app ul") as HTMLUListElement; // Tipando os elementos
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listagem_tarefas");// Buscar lista salva no localStorage *Vem como string

//Lista de tarefas
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

/** Converter(JSON.parse()) a variável listaSalva para um array novamente porque ela vem como string.
 * 
 * 
 */                                                                            


function listarTarefas() {
    listElement.innerHTML = ""; //Limpando a lista

    tarefas.map(item => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);

        todoElement.appendChild(tarefaText); // Colocando dentro de uma tag li o item
        listElement.appendChild(todoElement); //Colocando os itens dentro da nossa lista

    })

};

listarTarefas(); // Chamando a função listar tarefas para carregar na tela






function adicionarTarefa(): boolean | void {
    if (inputElement.value === " ") {
        alert("Digite alguma coisa");
        return false; //Retornando false porque se for 
    } else {
        let tarefaDigitada: string = inputElement.value;
        tarefas.push(tarefaDigitada);

        inputElement.value = "";

        listarTarefas();
        salvarDados();
    };
};

buttonElement.onclick = adicionarTarefa;

function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas)); //Converter o array tarefas em string
};




