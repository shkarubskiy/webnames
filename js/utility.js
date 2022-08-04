export function getRandomInt(min, max) {
  let rnd = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rnd);
}
