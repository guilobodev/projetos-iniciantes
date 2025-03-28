"use strict";

const display = document.querySelector("#display");
const numeros = document.querySelectorAll("[id*= tecla");
const operadores = document.querySelectorAll("[id*=operador]");
const limparDisplay = document.querySelector("#limparDisplay");

let novoNumero = true;
let numeroAnterior;
let operador;
let numeroAtual = display.textContent;
let total;

function atualizarDisplay(texto) {
  if (novoNumero) {
    display.textContent = texto;
    novoNumero = false;
  } else {
    display.textContent += texto;
    //
  }
}

limparDisplay.addEventListener("click", (limpar) => {
  display.textContent = "";
  novoNumero = true
});

function inserirNumero(event) {
  atualizarDisplay(event.target.textContent);
}

const operacaoPendente = () => operador !== undefined;

function calcular() {
  if (operacaoPendente()) {
    let numeroAtual = parseFloat(display.textContent);
    novoNumero = true;
    if (operador == "+") {
      atualizarDisplay(numeroAnterior + numeroAtual);
    }
  }
}

function selecionarOperador(event) {
  if (!novoNumero) {
    calcular();
    novoNumero = true;
    operador = event.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
    console.log(operador);
    console.log(numeroAnterior);
  }
}
//numeros
numeros.forEach((numero) => {
  numero.addEventListener("click", inserirNumero);
});

//operadores
operadores.forEach((operador) => {
  operador.addEventListener("click", selecionarOperador);
});
