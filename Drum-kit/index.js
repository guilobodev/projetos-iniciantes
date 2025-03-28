"use strict";

const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "openhat.wav",
  G: "ride.wav",
  H: "snare.wav",
  J: "tink.wav",
  K: "tom.wav",
};


function criarDiv(text) {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = text;
  div.id = text;
  document.querySelector("#container").appendChild(div);
}

function exibir(sons) {
  let arraySons = Object.keys(sons);
  arraySons.forEach(criarDiv);
}

let container = document.querySelector("#container");
container.addEventListener("click", ativarDiv);

const adiconarEfeito = (letra) => document.getElementById(letra).classList.add('active')

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend',removeActive);

}
function ativarDiv(event) {
  let letra = ''
  if (event.type == 'click'){
    letra = event.target.id;
  }
  else {
    letra = event.key.toUpperCase();
  }
  console.log(event)
  let letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adiconarEfeito(letra)
    torcarSom(letra);
    removerEfeito(letra)

  }
}
function torcarSom(letra) {
  const audio = new Audio(`./sons/${sons[letra]}`);
  audio.play();
}

exibir(sons);

document.querySelector('#container').addEventListener('click',ativarDiv)

window.addEventListener('keydown',ativarDiv)
