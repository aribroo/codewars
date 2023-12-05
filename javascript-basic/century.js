/**
 * Menentukan abad dari suatu tahun.
 * 
 * @param {number} year - Tahun yang akan diidentifikasi abadnya.
 * @returns {number} - Abad dari tahun yang diberikan.
 */
const century = (year) => {
  return Math.ceil(year / 100);
};

console.log(century(1699));
console.log(century(1889));
console.log(century(1900));
console.log(century(2000));
console.log(century(89));
console.log(century(101));
