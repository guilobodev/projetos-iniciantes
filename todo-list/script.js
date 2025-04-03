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
