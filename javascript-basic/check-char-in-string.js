/**
 * Cek string apakah unique atau tidak
 * 
 * @param {string} string - string kata
 * @returns {boolean} - true jika unique
 */
const isUnique = (word) => {
  const charSet = new Set()

  for (const char of word) {
    if(charSet.has(char)){
      return false
    }

    charSet.add(char)
  }

  return true
}

console.log(isUnique('abcde'));
console.log(isUnique('apa kabar'));