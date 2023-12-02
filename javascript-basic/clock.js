/**
 * Convert hh-mm-ss to milisecond
 * 
 * @param {number} h - hours (1h = 3600000ms)
 * @param {number} m - minute (1h = 6000ms)
 * @param {number} s - second (1h = 1000ms)
 * 
 * @returns {number} - return in milisecond
 */
const past = (h, m, s) => {
  return (h * 3600000) + (m * 60000) + (s * 1000)
}


const mili = past(0,1,1)
console.log(mili);