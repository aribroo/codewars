/**
 * Mengulang string sebanyak n kali
 * 
 * @param {Number} num 
 * @param {String} str 
 * @returns {String}
 */
const repeatStr = (num, str) => {
  return str.repeat(num)
}

console.log(repeatStr(2, 'I'));
console.log(repeatStr(5, 'Hello'));
console.log(repeatStr(10, '*'));