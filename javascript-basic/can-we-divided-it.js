/**
 * Memeriksa apakah suatu angka dapat dibagi habis oleh dua angka tertentu.
 * 
 * @param {number} number - Angka yang akan diperiksa.
 * @param {number} x - Angka pertama untuk divisibilitas.
 * @param {number} y - Angka kedua untuk divisibilitas.
 * @returns {boolean} - Mengembalikan true jika `number` dapat dibagi habis oleh kedua angka `x` dan `y`.
 */
const isDividedBy = (number, x, y) => (number % x === 0 && number % y === 0);

console.log(isDividedBy(-12, 2, -6));
console.log(isDividedBy(-12, 2, -5));

console.log(isDividedBy(45, 1, 6));
console.log(isDividedBy(45, 5, 15));

console.log(isDividedBy(4, 1, 4));
console.log(isDividedBy(15, -5, 3));