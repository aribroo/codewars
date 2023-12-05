/**
 * Menghitung jumlah domba yang ada dalam array.
 *
 * @param {Array} arrSheeps - Array yang berisi nilai true untuk setiap domba yang hadir, dan false untuk yang tidak hadir.
 * @returns {Number} - Jumlah domba yang hadir.
 */
const countSheeps = (arrSheeps) => {
  // return arrSheeps.filter(Boolean).length -> alternatif

  let total = 0;
  arrSheeps.map((sheep) => {
    if (sheep === true) total++;
  });

  return total;
};

const sheeps = [
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(sheeps));
