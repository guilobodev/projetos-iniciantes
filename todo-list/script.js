
"use strict";

function criarItem(value, status) {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = ` 
    <input type='checkbox' ${status}>
    <div>${value}</div>
    <input type='button' value='X'>`;


    document.querySelector('#todoList').appendChild(item)
}

