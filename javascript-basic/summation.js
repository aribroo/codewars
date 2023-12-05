/**
 * Menghitung jumlah dari 1 hingga n menggunakan perulangan.
 * @param {number} n - Bilangan bulat positif.
 * @returns {number} - Jumlah dari 1 hingga n.
 */
const summation = (n) => {
  if (typeof n !== 'number' || n < 1) return false;

  let total = 0;
  
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;

  // One line solution (Formula Gauss)
  // return (n * (n + 1)) / 2;
};

/**
 * Menghitung jumlah dari 1 hingga n menggunakan rekursi.
 * @param {number} n - Bilangan bulat positif.
 * @returns {number} - Jumlah dari 1 hingga n.
 */
const summationWithRekursion = (n) => {
  if (n === 1) {
    return 1;
  }

  return n + summationWithRekursion(n - 1);
};

console.log(summation(3)); 
console.log(summationWithRekursion(8)); 
