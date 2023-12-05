/**
 * Mencari nilai terkecil dalam sebuah array.
 * 
 * @param {Array} arr - Array angka yang akan dicari nilai terkecilnya.
 * @returns {Number|Boolean} - Nilai terkecil dalam array, atau false jika array kosong atau tidak terdefinisi.
 */
const findSmallestNum = (arr) => {
  if (!arr || arr.length < 1) return false;

  // Alternatif: return arr.sort((x, y) => x - y)[0]
  return Math.min(...arr);
};

// Contoh pemanggilan fungsi
console.log(findSmallestNum([34, 150, 1, 0]));   
console.log(findSmallestNum([-34, -150, 10, 7])); 
console.log(findSmallestNum([]));                 
console.log(findSmallestNum());                   
