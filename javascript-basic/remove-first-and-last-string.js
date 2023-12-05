/**
 * 
 * @param {String} string 
 * @returns 
 */
const removeChar = (str) => {
  // return str.substr(1, str.length - 1) -> alternatif
  return str.slice(1, -1)
}

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));