"use strict";

      const imagens = [
        { id: "1", url: "./img/chrono.jpg" },
        { id: "2", url: "./img/inuyasha.jpg" },
        { id: "3", url: "./img/ippo.png" },
        { id: "4", url: "./img/tenchi.jpg" },
        { id: "5", url: "./img/tenjhotenge.jpg" },
        { id: "6", url: "./img/yuyuhakusho.jpg" },
      ];

      const containerItems = document.querySelector("#container-items");

      const carregarImagens = (imagens, container) => {
        imagens.forEach((imagem) => {
          container.innerHTML += ` <div class='item'>
                <img src='${imagem.url}'
            </div>
        `;
        });
      };

      carregarImagens(imagens, containerItems);

      let items = document.querySelectorAll(".item");

      console.log(items);

      const previous = () => {
        let items = document.querySelectorAll(".item");
        const lastItem = items[items.length - 1];
        containerItems.insertBefore(lastItem, items[0]);
      };

      const next = () => {
        containerItems.appendChild(items[0]);
        items = document.querySelectorAll(".item");
      };

      document.querySelector("#next").addEventListener("click", next);

      document.querySelector("#previous").addEventListener("click", previous);