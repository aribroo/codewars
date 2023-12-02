/**
 * Calculate a life path number 
 * 
 * @param {string} dateOfBirth format 'yyyy-mm-dd'
 * @returns {number} - satu digit hasil calculate
 */
const lifePathNumber = (dateOfBirth) => {
  const [year, month, day] = dateOfBirth.split('-')

  const y = sumDigits(year)
  const m = sumDigits(month)
  const d = sumDigits(day)

  const total = y + m + d

  return sumDigits(total.toString())
  
}

/**
 * Fungsi rekursi untuk menjumlahkan digit-digit dalam suatu string
 * sehingga menghasilkan satu digit.
 *  
 * @param {string} stringDigit - String yang berisi digit - digit angka
 * @returns {number} - satu digit hasil penjumlahan
 */
const sumDigits = (stringDigit) => {
  if(stringDigit.length === 1){
    return +stringDigit
  }

  const sumResult = stringDigit.split('').reduce((acc, current) => acc + (+current), 0)
  return sumDigits(sumResult.toString())
}



console.log(lifePathNumber('1879-03-14'))
console.log(lifePathNumber('1815-12-10'))
console.log(lifePathNumber('1961-07-04'))