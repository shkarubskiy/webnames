const gameData = {
  turnOrder: null,
  keys: [],
  classes: [],
  id: null,
};
const title = document.querySelector(".header__title");
const cards = document.querySelectorAll(".card");

function getParams() {
  let url = window.location.search;
  url = url.replace("?", "");
  gameData.turnOrder = url[0];
  gameData.keys = url.slice(1, url.length);
}

function convertParams() {
  for (let i = 0; i < gameData.keys.length - 1; i += 2) {
    if (`${gameData.keys[i]}${gameData.keys[i + 1]}` == "00")
      gameData.classes.push("card-green");
    if (`${gameData.keys[i]}${gameData.keys[i + 1]}` == "10")
      gameData.classes.push("card-red");
    if (`${gameData.keys[i]}${gameData.keys[i + 1]}` == "01")
      gameData.classes.push("card-blue");
    if (`${gameData.keys[i]}${gameData.keys[i + 1]}` == "11")
      gameData.classes.push("card-black");
  }
}

function assignCards() {
  cards.forEach((card, index) => {
    card.classList.add(gameData.classes[index]);
  });
}

function getId() {
  gameData.id = gameData.keys
    .split("")
    .map((x, i) => Number(x) * i)
    .reduce((x, y) => x + y);
}

getParams();
console.log(gameData);
getId();
convertParams();
assignCards();
title.textContent = gameData.id;
title.classList.add(gameData.turnOrder == 1 ? "title-red" : "title-blue");
