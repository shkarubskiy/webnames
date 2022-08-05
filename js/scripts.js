import words from "./words.js";
import { getRandomInt, getQR } from "./utility.js";

const subtitle = document.querySelector(".header__subtitle");
const cards = document.querySelectorAll(".card");
const qr = document.querySelector(".popup__image");
const button = document.querySelector(".button");
const popup = document.querySelector(".popup__container");

button.addEventListener("click", () => {
  popup.classList.remove("hidden");
});
popup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

function startGame(data) {
  cards.forEach((card, i) => {
    card.textContent = data.words[i];
    card.addEventListener("click", () => {
      if (data.keys[card.dataset.index] == "00")
        card.classList.add("card-green");
      if (data.keys[card.dataset.index] == "01")
        card.classList.add("card-blue");
      if (data.keys[card.dataset.index] == "10") card.classList.add("card-red");
      if (data.keys[card.dataset.index] == "11")
        card.classList.add("card-black");
    });
  });
}

function gameData() {
  this.getTurnOrder = () => {
    return Math.round(0.5 + Math.random() * 2);
  };
  this.getKeys = () => {
    let dataR = [
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "10",
      "10",
      "10",
      "10",
      "10",
      "10",
      "10",
      "10",
      "01",
      "01",
      "01",
      "01",
      "01",
      "01",
      "01",
      "01",
      "01",
      "11",
    ];
    let dataB = [
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "10",
      "10",
      "10",
      "10",
      "10",
      "10",
      "10",
      "10",
      "10",
      "01",
      "01",
      "01",
      "01",
      "01",
      "01",
      "01",
      "01",
      "11",
    ];
    let data = this.turnOrder == 0 ? dataR : dataB;
    for (let i = data.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  };
  this.getWords = (source) => {
    let buffer = source.slice();
    let result = [];
    for (let i = 0; i < 25; i++) {
      let rnd = getRandomInt(0, buffer.length - 1);
      result.push(buffer[rnd]);
      buffer.splice(rnd, 1);
    }
    return result;
  };
  this.getId = () => {
    return this.keys
      .slice()
      .join("")
      .split("")
      .map((x, i) => Number(x) * i)
      .reduce((x, y) => x + y);
  };

  this.turnOrder = this.getTurnOrder();
  this.keys = this.getKeys();
  this.words = this.getWords(words.basic);
  this.id = this.getId();
}

const data = new gameData();
startGame(data);
qr.src = getQR(
  data.keys.join(""),
  "http://192.168.35.110:5500/cap.html",
  data.turnOrder
);
subtitle.textContent = `ID ${data.id}`;
