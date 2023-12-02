/**
 * Mengembalikan sebuah fungsi yang menerima angka sebagai parameter
 * dan mengembalikan teks hari dalam array weekdays berdasarkan angka tersebut.
 * 
 * @param {Array} weekdays - Array berisi teks hari.
 * @returns {Function} - Fungsi yang mengembalikan teks hari berdasarkan angka.
 */
function weekdayText(weekdays) {
  /**
   * Mengembalikan teks hari dalam array weekdays berdasarkan angka.
   * Jika angka diluar rentang indeks weekdays, lempar Error.
   * 
   * @param {number} number - Angka yang merepresentasikan indeks hari.
   * @returns {string} - Teks hari.
   * @throws {Error} - Jika angka diluar rentang indeks weekdays.
   */
  return function getText(number) {
    if (number >= 0 && number < weekdays.length) {
      return weekdays[number];
    } else {
      throw new Error('Invalid weekday number');
    }
  };
}

// Contoh penggunaan
const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const test = weekdayText(day);
console.log(test(5)); // Output: "Sat"

try {
  const day2 = ['M', 'T', 'W', 'T', 'F'];
  const test2 = weekdayText(day2);
  console.log(test2(10));
} catch (e) {
  console.error(e.message); // Output: "Invalid weekday number"
}
