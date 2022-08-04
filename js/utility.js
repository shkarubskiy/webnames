export function getRandomInt(min, max) {
  let rnd = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rnd);
}

export function getQR(data, link, order) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}?${order}${data}`;
}
