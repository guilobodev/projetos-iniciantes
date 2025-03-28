let nome = document.querySelector("#nome-input");
let altura = document.querySelector("#altura-input");
let peso = document.querySelector("#peso-input");
function calcular() {
  const imc =  parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value)) ;
  return imc.toFixed(4);
}

function mostrar() {
  const imc = calcular();
  const p = document.createElement("p");
  const div = document.querySelector(".final");

  p.innerHTML = `Nome: ${nome.value}, Altura: ${altura.value}, Peso: ${peso.value}, IMC: ${imc}`;

  div.append(p);
}