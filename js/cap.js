const gameData = {
  turnOrder: null,
  keys: [],
  classes: [],
};
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

getParams();
convertParams();
assignCards();
