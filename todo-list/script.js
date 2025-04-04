"use strict";

function criarItem() {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = ` 
    <input type='checkbox'>
    <div>${value}</div>
    <input type='button' value='X'>`;


    document.querySelector('#todoList').appendChild(item)
}

