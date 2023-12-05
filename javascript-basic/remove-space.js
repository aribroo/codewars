/**
 * Menghilangkan spasi pada kalimat
 * 
 * @param {String} str 
 * @returns {String}
 */
const noSpace = (str) => {
  return str.split(' ').join('')
}

console.log(noSpace('rifki ari  l'));
console.log(noSpace('rsdfa safsda d sd sdaf'));