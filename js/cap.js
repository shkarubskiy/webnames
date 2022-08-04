const gameData = {
  turnOrder: null,
  keys: [],
};

function getParams() {
  let url = window.location.search;
  url = url.replace("?", "");
  gameData.turnOrder = url[0];
  let buffer = url.slice(1, url.length - 1);
  for (let i = 0; i < buffer.length - 1; i += 2) {
    if (`${buffer[i]}${buffer[i + 1]}` == "00")
      gameData.keys.push("card-green");
    if (`${buffer[i]}${buffer[i + 1]}` == "10") gameData.keys.push("card-red");
    if (`${buffer[i]}${buffer[i + 1]}` == "01") gameData.keys.push("card-blue");
    if (`${buffer[i]}${buffer[i + 1]}` == "11")
      gameData.keys.push("card-black");
  }
}

getParams();
