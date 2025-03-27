function ligar() {
    const img = document.querySelector("img");
    img.setAttribute("src", "img/ligada.jpg");
  }
  function voltar() {
    const img = document.querySelector("img");
    img.src = "img/desligada.jpg";
  }