const data = {
  turnOrder: null,
  keys: [],
  classes: [],
  id: null,
};
const title = document.querySelector(".header__title");
const subtitleId = document.querySelector(".subtitle-id");
const subtitleOrder = document.querySelector(".subtitle-order");
const cards = document.querySelectorAll(".card");

function getParams() {
  let url = window.location.search;
  url = url.replace("?", "");
  data.turnOrder = url[0];
  data.keys = url.slice(1, url.length);
}

function getId() {
  data.id = data.keys
    .split("")
    .map((x, i) => Number(x) * i)
    .reduce((x, y) => x + y);
}

function convertParams() {
  for (let i = 0; i < data.keys.length - 1; i += 2) {
    if (`${data.keys[i]}${data.keys[i + 1]}` == "00")
      data.classes.push("card-yellow");
    if (`${data.keys[i]}${data.keys[i + 1]}` == "10")
      data.classes.push("card-red");
    if (`${data.keys[i]}${data.keys[i + 1]}` == "01")
      data.classes.push("card-blue");
    if (`${data.keys[i]}${data.keys[i + 1]}` == "11")
      data.classes.push("card-black");
  }
}

function assignCards() {
  cards.forEach((card, index) => {
    card.classList.add(data.classes[index]);
  });
}

getParams();
getId();
convertParams();
assignCards();
subtitleId.textContent = `ID ${data.id}`;
subtitleOrder.classList.add(
  data.turnOrder == 1 ? "subtitle-red" : "subtitle-blue"
);
subtitleOrder.textContent =
  data.turnOrder == 1 ? "Начинают красные" : "Начинают синие";
