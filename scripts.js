function getParams() {
  let url = window.location.search;
  url = url.replace("?", "");
  return url;
}

function getRandomInt(min, max) {
  let rnd = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rnd);
}

function gameData() {
  this.getTurnOrder = () => {
    return Math.round(0.5 + Math.random() * 2);
  };
  this.getCards = () => {
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
  this.cards = this.getCards();
}

const data = new gameData();
