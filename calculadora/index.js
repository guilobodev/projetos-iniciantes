'use strict'

const display = document.querySelector('#display')
const numeros = document.querySelectorAll("[id*= tecla")


function atualizarDisplay (texto) {
    display.textContent = texto
}

function inserirNumero(event) {
    atualizarDisplay(event.target.textContent)
}


numeros.forEach(numero => {
    numero.addEventListener("click", inserirNumero)
})