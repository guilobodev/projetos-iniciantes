"use strict";

const display = document.querySelector("#display");
const numeros = document.querySelectorAll("[id*= tecla");
const operadores = document.querySelectorAll("[id*=operador]");

let novoNumero = true;
let numeroAnterior;
let operador;


//numeros
numeros.forEach((numero) => {
  numero.addEventListener("click", inserirNumero);
});

//operadores
operadores.forEach((operador) => {
  operador.addEventListener("click", selecionarOperador);
});

function atualizarDisplay(texto) {
  if (novoNumero) {
    display.textContent = texto.toLocaleString('BR');
    novoNumero = false;
  } else {
    display.textContent += texto.toLocaleString('BR');
    //
  }
}

function inserirNumero(event) {
  console.log(event);
  atualizarDisplay(event.target.textContent);
}

const operacaoPendente = () => operador !== undefined;

function calcular() {
  if (operacaoPendente()) {
    let numeroAtual = parseFloat(display.textContent.replace(',','.'));
    novoNumero = true;
    if (operador == "+") {
      atualizarDisplay(numeroAnterior + numeroAtual);
    } else if (operador == "-") {
      atualizarDisplay(numeroAnterior - numeroAtual);
    } else if (operador == "/") {
      atualizarDisplay(numeroAnterior / numeroAtual);
    } else if (operador == "*") {
      atualizarDisplay(numeroAnterior * numeroAtual);
    }
  }
}

function selecionarOperador(event) {
  if (!novoNumero) {
    calcular();
    novoNumero = true;
    operador = event.target.textContent;
    numeroAnterior = parseFloat(display.textContent.replace(',','.'));
    console.log(operador);
    console.log(numeroAnterior);
  }
}

const limparDisplay = () => {
  display.textContent = "";
};

document
  .querySelector("#limparDisplay")
  .addEventListener("click", limparDisplay);

document.querySelector("#igual").addEventListener("click", ativarIgual);

function ativarIgual() {
  calcular();
  operador = undefined;
}

document
  .querySelector("#limparCalculo")
  .addEventListener("click", limparCalculo);

function limparCalculo() {
  limparDisplay();
  operador = undefined;
  novoNumero = true;
  numeroAnterior = undefined;
}

function removerUltimoNumero() {
  display.textContent = display.textContent.slice(0, -1);
}

document
  .querySelector("#backspace")
  .addEventListener("click", removerUltimoNumero);

function inverterSinal() {
  novoNumero = true;
  atualizarDisplay(display.textContent * -1);
}

document.querySelector("#inverter").addEventListener("click", inverterSinal);

function existeDecimal() {
  display.textContent.indexOf(',') !== -1;
}
function existeValor () {
  display.textContent.length > 0
}

function inserirDecimal() {
  if (!existeDecimal()) {
    if (existeValor()) {
      atualizarDisplay("0,");
    } else {
      atualizarDisplay(",");
    }
  }
}

document.querySelector("#decimal").addEventListener("click", inserirDecimal);


const mapaTeclado = {
  0: 'tecla0',
  1: 'tecla1',
  2: 'tecla2',
  3: 'tecla3',
  4: 'tecla4',
  5: 'tecla5',
  6: 'tecla6',
  7: 'tecla7',
  8: 'tecla8',
  9: 'tecla9',
  '/': 'operadorDividir',
  '*': 'operadorMultiplicar',
  '-': 'operadorSubtrair',
  '+': 'operadorAdicionar',
  '=': 'igual',
  Enter: 'igual',
  Backspace: 'backspace',
  c: 'limparDisplay',
  Escape: 'limparCalculo',
  ',': 'decimal',
};


function mapearTeclado (event) {
    const tecla = event.key;

    const teclaPermitida = () => {
      Object.keys(mapaTeclado).indexOf(tecla) !== -1
    }

    if (teclaPermitida()) {
      document.querySelector(`#${mapaTeclado[tecla]}`).click();
    }

    
    
}
document.addEventListener('keydown',mapearTeclado)