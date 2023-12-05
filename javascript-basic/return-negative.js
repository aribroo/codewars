/**
 * Mengubah bilangan menjadi negatif jika bilangan tersebut positif.
 * 
 * Jika bilangan sudah negatif atau nol, maka akan dikembalikan tanpa perubahan.
 * @param {Number} num - Bilangan yang akan diubah.
 * @returns {Number} - Bilangan negatif (jika semula positif), atau bilangan non-negatif (jika semula negatif atau nol).
 */
const makeNegative = (num) => {
  return num > 0 ? -num : num;
};

console.log(makeNegative(-1));  
console.log(makeNegative(8));   
console.log(makeNegative(5));   
console.log(makeNegative(0));   
console.log(makeNegative(0.12)); 
