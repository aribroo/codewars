/**
 * Menghitung jumlah kuadrat dari setiap elemen dalam array.
 * 
 * @param {Array} numbers - Array angka yang akan dihitung jumlah kuadratnya.
 * @returns {number} - Jumlah kuadrat dari semua elemen dalam array.
 */
const squareSum = (numbers) => {
  return numbers
    .map((num) => Math.pow(num, 2)) // Mengkuadratkan setiap elemen array
    .reduce((acc, current) => acc + current); // Menghitung jumlah kuadrat
};

console.log(squareSum([1, 2, 2]));    
console.log(squareSum([0, 3, 4, 5])); 
