<<<<<<< HEAD
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

=======
'use strict'

function  criarItem(texto) {
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `
    <input type='checkbox'>
    <div>${texto} </div>
    <input type='button' value='X'>
    `
    document.querySelector('#todoList').appendChild(item)
}
>>>>>>> e2800b350d3acf4f2a1d5794c3eaf15329703385
