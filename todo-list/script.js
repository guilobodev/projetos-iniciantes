"use strict";

// let banco = [
// ];

const getBanco = () => JSON.parse(localStorage.getItem("todoList")) ?? [];
const setBanco = (banco) =>
  localStorage.setItem("todoList", JSON.stringify(banco));

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
  const banco = getBanco();
  banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}

function inserirItem(event) {
  let valor = event.target.value;
  const tecla = event.key;
  if (tecla === "Enter") {
    const banco = getBanco();
    banco.push({ tarefa: valor, status: "" });
    setBanco(banco);
    atualizarTela();
    event.target.value = "";
  }
}

function clickItem(event) {
  const elemento = event.target;
  if (elemento.type === "button") {
    let indice = elemento.dataset.indice;
    removerIndice(indice);
  } else if (elemento.type === "checkbox") {
    let indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
}

function removerIndice(indice) {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atualizarTela();
  console.log(banco);
}

function atualizarItem(indice) {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === "" ? "checked" : "";
  setBanco(banco);
  atualizarTela();
  console.log(banco);
}

document.querySelector("#newItem").addEventListener("keypress", inserirItem);
document.querySelector("#todoList").addEventListener("click", clickItem);

atualizarTela();
