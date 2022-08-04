const cards = document.querySelectorAll(".card");

function fillCards(data) {
  cards.forEach((card, i) => {
    card.textContent = data.keys[i];
    card.addEventListener("click", () => {
      console.log();
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

function getParams() {
  let url = window.location.search;
  url = url.replace("?", "");
  return url;
}

// function getRandomInt(min, max) {
//   let rnd = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rnd);
// }

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
  this.turnOrder = this.getTurnOrder();
  this.keys = this.getKeys();
}

const data = new gameData();
fillCards(data);
