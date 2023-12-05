/**
 * Membalikkan urutan karakter dalam sebuah string.
 * @param {String} string - String yang akan dibalik urutannya.
 * @returns {String} - String hasil pembalikan urutan karakter.
 */
const reverseString = (string) => {
  return string.split('').reverse().join('');
};

console.log(reverseString('world')); 
console.log(reverseString('hello')); 
console.log(reverseString('')); 
