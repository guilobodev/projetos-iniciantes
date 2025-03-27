let indexCor = 0;
const img = document.querySelector("#img");
const buttons = document.querySelector("#buttons");
let intervalId = null

const trafego = (event) => {
  parar();
  ligar[event.target.id]();
};

const nextIndex = () => {
  indexCor < 2 ? ++indexCor : (indexCor = 0);
};

const trocarCor = () => {
  const cores = ["vermelho", "amarelo", "verde"];
  const cor = cores[indexCor];
  ligar[cor]();
  nextIndex();
};

const parar = () => {
  clearInterval(intervalId);
};

const ligar = {
  vermelho: function red() {
    img.src = "./img/vermelho.png";
  },
  amarelo: function amarelo() {
    img.src = "./img/amarelo.png";
  },

  verde: function verde() {
    img.src = "./img/verde.png";
  },

  automatico: () => intervalId = setInterval(trocarCor, 1000)
};

buttons.addEventListener("click", trafego);