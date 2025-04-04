"use strict";

const input = document.querySelector("#newItem");

let banco = [
];

function getBanco () {
  localStorage.getItem('todoList') ?? [];
  
}

function criarItem(value, status, indice) {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = ` 
    <input type='checkbox' ${status} data-indice=${indice}>
    <div>${value}</div>
    <input type='button' value='X' data-indice=${indice}>`;

  document.querySelector("#todoList").appendChild(item);
}

function limparTela() {
  const todoList = document.querySelector("#todoList");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}
function atualizarTela() {
  limparTela();
  banco.forEach((item, indice) => criarItem(item.tarefa,item.status, indice));
}

function inserirItem(event) {
  let valor = input.value;
  const tecla = event.key;
  if (tecla === "Enter") {
    banco.push({ 'tarefa': valor, 'status': "" });
    atualizarTela();
    event.target.value = "";
  }
}

function clickItem(event) {
  const elemento = event.target;
  if (elemento.type === 'button'){
    let indice = elemento.dataset.indice
    removerIndice(indice)
  }
  else if (elemento.type === 'checkbox') {
     let indice = elemento.dataset.indice
     atualizarItem(indice)
  }
}

function removerIndice(indice){
  banco.splice(indice, 1);
  atualizarTela()
  console.log(banco)
}

function atualizarItem(indice) {
  banco[indice].status = banco[indice].status === '' ? 'checked' : '';
  atualizarTela()
  console.log(banco)
}

document.querySelector("#newItem").addEventListener("keypress", inserirItem);
document.querySelector("#todoList").addEventListener("click", clickItem);

atualizarTela();
